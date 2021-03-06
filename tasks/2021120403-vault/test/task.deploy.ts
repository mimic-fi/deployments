import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { VaultDeployment } from '../input'

describe('Vault V0', function () {
  const task = Task.fromHRE('2021120403-vault', hre)

  it('deployed a Vault as expected', async () => {
    const input = task.input() as VaultDeployment
    const output = task.output()

    const vault = await task.instanceAt('Vault', output.Vault)
    expect(await vault.protocolFee()).to.be.equal(input.protocolFee)
    expect(await vault.priceOracle()).to.be.equal(input.ChainLinkPriceOracle || output.ChainLinkPriceOracle)
    expect(await vault.swapConnector()).to.be.equal(input.UniswapConnector || output.UniswapConnector)

    for (const token of input.whitelistedTokens) {
      expect(await vault.isTokenWhitelisted(token)).to.be.true
    }

    for (const strategy of input.whitelistedStrategies) {
      expect(await vault.isStrategyWhitelisted(strategy)).to.be.true
    }
  })
})
