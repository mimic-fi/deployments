import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2021120403-vault')

export type BalancerStableStrategyDeployment = {
  Vault: string
  balancerVault: string
  strategies: Array<{ name: string; token: string; poolId: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

export default {
  kovan: {
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'USDC',
        token: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
        poolId: '0x45f78862bd3aa5205e63141fa7f2d35f38eb87c30000000000000000000000fd',
        slippage: fp(0.99),
        metadata: 'ipfs:QmTwHVxATuHTavXRu7hKSNSiHyFP5fpwtGejTC5uu82VdE',
      },
      {
        name: 'DAI',
        token: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
        poolId: '0x45f78862bd3aa5205e63141fa7f2d35f38eb87c30000000000000000000000fd',
        slippage: fp(0.99),
        metadata: 'ipfs:QmeUnqpmW61g8tvTYQpRpAZq224jbfgou1YJCvCA5H1NBL',
      },
    ],
  },
  mainnet: {
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'USDC',
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        poolId: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
        slippage: fp(0.01),
        metadata: 'ipfs:QmWpmKtVUvCZoHXwH3G249kPsJ3Pj542ApYJdMzc2aa3A8',
      },
    ],
  },
}
