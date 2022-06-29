import { assertEvent, getSigner } from '@mimic-fi/v1-helpers'

import logger from '../../src/logger'
import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { BalancerStableStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as BalancerStableStrategyDeployment
  if (!task.isTest && !from) from = await getSigner(input.from)

  const factoryArgs = [input.Vault, input.balancerVault, input.balancerMinter, input.gaugeFactory, input.gaugeType]
  const factory = await task.deployAndVerify('BalancerStableStrategyFactory', factoryArgs, from, force, 'factory')

  const output = task.output()
  for (const strategy of input.strategies) {
    if (force || !output[strategy.name]) {
      const args = [strategy.token, strategy.poolId, strategy.slippage, strategy.metadata]
      const tx = await factory.create(...args)
      const event = await assertEvent(tx, 'StrategyCreated')
      const instance = await task.instanceAt('BalancerStableStrategy', event.args.strategy)
      logger.success(`Deployed strategy ${strategy.name} at ${instance.address}`)
      await instance.connect(from).transferOwnership(input.admin)
      task.save({ [strategy.name]: instance.address })
      await task.verify('BalancerStableStrategy', instance.address, args)
    }
  }
}
