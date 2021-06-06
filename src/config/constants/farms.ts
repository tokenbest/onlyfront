import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'OT2',
    lpAddresses: {
      97: '0x9a7C863A94EB66128A8DE29b9209ef7e889538E2',// '0xCd13E094a5C837eA16d5c32b5E4dC006cABDF494',// '0x311cFaDeDDb8442Eefc1B9994bD974DF79332827',// '0x5053A343D08C814418590FD8FBA767c1f2B7a460',
      // 96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.ot2,
    quoteToken: tokens.ot2,
  },
  {
    pid: 1,
    lpSymbol: 'OT2-BUSD LP',
    lpAddresses: {
      97: '0x7dbE0d2bd1FA6bAd69B430dEBae35DA72A0387e6',// '0x30f3F3F0B4ce263a53CD31e4cc179c877202fD9f',// '0xe63453C51E600ba9747Ee2E1d3D584867E309f9C',// '0xA801B67156201b473FFab4584FD0c2b0e5CcCB37',
      // 96: '0x88e2ffed9f03841f014FBb5DABF65041bC382d59',
      56: '0x88e2ffed9f03841f014FBb5DABF65041bC382d59',
    },
    token: tokens.ot2,
    quoteToken: tokens.obusd,
  },
  {
    pid: 2,
    lpSymbol: 'OT2-BNB LP',
    lpAddresses: {
      97: '0x9A10A3F53714b6F9BE53C1eD30fC58D5A7adDe1F',// '0x2f558566D4dAC18308Fe7c6F5EF6Fb826Ed7D1c2',// '0xa1e65141971d329DBD81Ee01Fb8AFE0112dda5ED',// '0xF9c9170BEe19ea297d014D8aa3f986227aF8039e',
      // 96: '0x4Eb7Db5f03661CC7B5e0dEE6B2490999ef3e4612',
      56: '0x4Eb7Db5f03661CC7B5e0dEE6B2490999ef3e4612',
    },
    token: tokens.ot2,
    quoteToken: tokens.wbnb,
  },
]

export default farms
