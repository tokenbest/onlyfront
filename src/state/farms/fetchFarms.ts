import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'


const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)
      console.log(`fetchFarms--lpAddress:${lpAddress}`);
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.token.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: lpAddress,
          name: 'balanceOf',
          params: [getMasterChefAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAddress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: getAddress(farmConfig.token.address),
          name: 'decimals',
        },
        // // Quote token decimals
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'decimals',
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBalanceLP,
        lpTokenBalanceMC,// LP stake balance
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls)
// fetchFarms-2222222555---->:0x2f558566D4dAC18308Fe7c6F5EF6Fb826Ed7D1c2 --->1582000000000000000000 --->700000000000000000 --->0 --->33277620107213195959 --->18 --->18
// fetchFarms-2222222555---->:0x30f3F3F0B4ce263a53CD31e4cc179c877202fD9f --->30000000000000000000000 --->0 --->291959028218452691705 --->2078460969082652752231 --->18 --->18
// fetchFarms-2222222555---->:0x30f3F3F0B4ce263a53CD31e4cc179c877202fD9f --->30000000000000000000000 --->360000000000000000000 --->291959028218452691705 --->2078460969082652752231 --->18 --->18
// fetchFarms-quoteTo------->:0x7dbE0d2bd1FA6bAd69B430dEBae35DA72A0387e6 --->10000000000000000000000 --->300000000000000000000 --->0 --->1732050807568877293527 --->18 --->18
      console.log(`fetchFarms-quoteTokenAmount--11111-->:${lpAddress} --->${tokenBalanceLP} --->${quoteTokenBalanceLP} --->${lpTokenBalanceMC} --->${lpTotalSupply} --->${tokenDecimals} --->${quoteTokenDecimals}`);
      console.log(`fetchFarms-2222222555---->:${getAddress(farmConfig.token.address)}  --->${getAddress(farmConfig.quoteToken.address)}`);
      // Ratio in % a LP tokens that are in staking, vs the total number in circulation
      const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

      // Total value in staking in quote token value
      let  lpTotalInQuoteToken = new BigNumber(quoteTokenBalanceLP)
        .div(new BigNumber(10).pow(18))
        .times(new BigNumber(2))
        .times(lpTokenRatio)
      console.log(`fetchFarms-2222222555---->: ${lpTokenRatio.toJSON()} --->${lpTotalInQuoteToken.toJSON()}`);
      
      // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
      let tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
      let  quoteTokenAmount = new BigNumber(quoteTokenBalanceLP)
        .div(new BigNumber(10).pow(quoteTokenDecimals))
        .times(lpTokenRatio)

      let tokenAmountInLp = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals));
      
      if(farmConfig.pid===0){
        lpTotalInQuoteToken = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(quoteTokenDecimals));
        tokenAmount = lpTotalInQuoteToken;
        quoteTokenAmount = lpTotalInQuoteToken;
        tokenAmountInLp = lpTotalInQuoteToken;
      }

      console.log(`fetchFarms-2222222555---->: ${tokenAmount.toJSON()} --->${quoteTokenAmount.toJSON()}`);
      const [info, totalAllocPoint] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
      ])
      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))
      console.log(`fetchFarms-poolWeight---->:${lpAddress}--->${allocPoint.toNumber()} :: ${totalAllocPoint}`);
      console.log(`fetchFarms-quoteTokenAmount--222222-->:${lpAddress}--->${quoteTokenAmount}--->${tokenAmount}` );
      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
        poolWeight: poolWeight.toJSON(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        tokenAmountInLp: tokenAmountInLp.toJSON(),
      }
    }),
  )
  console.log(`state.farms.fetchFarms-->${JSON.stringify(data)}`)
  return data
}

export default fetchFarms
