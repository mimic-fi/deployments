import { expect } from 'chai'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('AgreementFactory', function () {
  const task = Task.forTest('20210817-agreement-factory', 'rinkeby')

  context('with no previous deploy', () => {
    const itDeploysFactory = (force: boolean) => {
      it('deploys an agreement factory', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.AgreementFactory).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const input = task.input()
        const factory = await task.instanceAt('AgreementFactory', output.AgreementFactory)
        expect(await factory.vault()).to.be.equal(input.Vault)
      })
    }

    context('when forced', () => {
      const force = true

      itDeploysFactory(force)
    })

    context('when not forced', () => {
      const force = false

      itDeploysFactory(force)
    })
  })

  context('with a previous deploy', () => {
    let previousDeploy: Output

    beforeEach('deploy', async () => {
      await task.run()
      previousDeploy = task.output()
    })

    context('when forced', () => {
      const force = true

      it('re-deploys the agreement factory', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.AgreementFactory).not.to.be.equal(previousDeploy.AgreementFactory)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the agreement factory', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.AgreementFactory).to.be.equal(previousDeploy.AgreementFactory)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
