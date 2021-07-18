import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'TBA',
    lpAddresses: {
      97: '0x1d3678f2369a6baF43c43162AB835c30D630bEC6',
      // 97: '0x9a7C863A94EB66128A8DE29b9209ef7e889538E2',
      // 96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.ot2,
    quoteToken: tokens.ot2,
  },
  {
    pid: 1,
    lpSymbol: 'TBA-BUSD LP',
    lpAddresses: {
      97: '0xB5e17fBE3C19832D31760B795dd285d0fAF55b70',
      // 97: '0x7dbE0d2bd1FA6bAd69B430dEBae35DA72A0387e6',
      // 96: '0x88e2ffed9f03841f014FBb5DABF65041bC382d59',
      56: '0x88e2ffed9f03841f014FBb5DABF65041bC382d59',
    },
    token: tokens.ot2,
    quoteToken: tokens.obusd,
  },
  {
    pid: 2,
    lpSymbol: 'TBA-BNB LP',
    lpAddresses: {
      97: '0x35FfE1092e9CD20Fc046422Ac8Ca23a2157c5de4',
      // 97: '0x9A10A3F53714b6F9BE53C1eD30fC58D5A7adDe1F',
      // 96: '0x4Eb7Db5f03661CC7B5e0dEE6B2490999ef3e4612',
      56: '0x4Eb7Db5f03661CC7B5e0dEE6B2490999ef3e4612',
    },
    token: tokens.ot2,
    quoteToken: tokens.wbnb,
  },
]

export default farms
