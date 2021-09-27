export type ChainLinkPriceOracleDeployment = {
  tokens: Array<string>
  ethPriceFeeds: Array<string>
}

export default {
  localhost: {
    tokens: [
      '0x0000000000000000000000000000000000000001', // DAI
      '0x0000000000000000000000000000000000000002', // USDC
    ],
    ethPriceFeeds: [
      '0x1000000000000000000000000000000000000000', // DAI/ETH
      '0x2000000000000000000000000000000000000000', // USDC/ETH
    ],
  },
  rinkeby: {
    tokens: [
      '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', // DAI (compound)
      '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b', // USDC (compound)
    ],
    ethPriceFeeds: [
      '0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D', // DAI/ETH
      '0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf', // USDC/ETH
    ],
  },
  kovan: {
    tokens: [
      '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa', // DAI (compound)
      '0xb7a4f3e9097c08da09517b5ab877f7a917224ede', // USDC (compound)
      '0x07de306ff27a2b630b1141956844eb1552b956b5', // USDT (compound)
      '0xd0A1E359811322d97991E03f863a0C30C2cF029C', // WETH (compound)
      '0x04DF6e4121c27713ED22341E7c7Df330F56f289B', // DAI (balancer)
      '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115', // USDC (balancer)
      '0xcC08220af469192C53295fDd34CFb8DF29aa17AB', // USDT (balancer)
      '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1', // WETH (balancer)
      '0x61460874a7196d6a22D1eE4922473664b3E95270', // COMP (compound)
    ],
    ethPriceFeeds: [
      '0x9190Ed2b64C037Ee14947bB31b33aD76EE586BEA', // CUSTOM
      '0x84aE8FEb82fb8B11D85647bb0f56ef1207721B5A', // CUSTOM
      '0x7F34AFA1694396c3b292F62BBA5CDda63777d326', // CUSTOM
      '0x1111111111111111111111111111111111111111', // WETH/ETH
      '0xAef30eDe3f27Be9fb4dE7A120107dff50c331e64', // CUSTOM
      '0xAef30eDe3f27Be9fb4dE7A120107dff50c331e64', // CUSTOM
      '0xAef30eDe3f27Be9fb4dE7A120107dff50c331e64', // CUSTOM
      '0x1111111111111111111111111111111111111111', // WETH/ETH
      '0xBF36C3dD46ECaE95BEf373cb116120679dCa89ea', // CUSTOM
    ],
  },
}
