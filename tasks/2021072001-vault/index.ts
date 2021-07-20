import Task from '../../src/task'
import logger from '../../src/logger'
import { VaultDeployment } from './input'
import { TaskRunOptions } from '../../src/types'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const output = task.output({ ensure: false })
  const input = task.input() as VaultDeployment
  const args = [input.protocolFee, input.swapConnector, input.whitelistedStrategies]

  if (force || !output.vault) {
    const vault = await task.deploy('Vault', args, from)
    task.save({ vault })
    await task.verify('Vault', vault.address, args)
  } else {
    logger.info(`Vault already deployed at ${output.vault}`)
    await task.verify('Vault', output.vault, args)
  }
}
