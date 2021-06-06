import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK } from 'config'

/**
 * Get the APY value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APY is NaN or infinite.
 */
export const getPoolApy = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apy.isNaN() || !apy.isFinite() ? null : apy.toNumber()
}

/**
 * Get farm APY value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
export const getFarmApr = (poolWeight: BigNumber, cakePriceUsd: BigNumber, poolLiquidityUsd: BigNumber): number => {
  const yearlyCakeRewardAllocation = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR).times(poolWeight).times(70).div(100)
  const apr = yearlyCakeRewardAllocation.times(cakePriceUsd).div(poolLiquidityUsd).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

// F=P*(1+i)^n
export const getFarmApy = (poolWeight: BigNumber, cakePriceUsd: BigNumber, poolLiquidityUsd: BigNumber): number => {
  const apr = getFarmApr(poolWeight,cakePriceUsd,poolLiquidityUsd);
  if(apr===null) return apr;
  console.log(`farms.apy---11->${new BigNumber(apr).div(365).div(100).plus(1).toString()}`)
  const apy = new BigNumber(apr).div(365).div(100).plus(1).pow(365);
  return apy.isNaN() || !apy.isFinite() || apy.gt(new BigNumber(10).pow(8)) ? Number.POSITIVE_INFINITY : apy.toNumber()
}

export default null
