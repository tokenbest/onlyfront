import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'

export const fetchFarmUserAllowances = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return { address: lpContractAddress, name: 'allowance', params: [account, masterChefAddress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABI, calls)
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return {
      stakedBalance:new BigNumber(stakedBalance[0]._hex).toJSON(),
      stakedFreeAmount:new BigNumber(stakedBalance[2]._hex).toJSON(),
    }
  })
  return parsedStakedBalances
}

export const fetchFarmUserStakedLocks = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'stakedLocks',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABI, calls)
  const parsedStakedLocks = rawStakedBalances.map((stakedLock) => {
    // return new BigNumber(stakedLock[0]._hex).toJSON()
    const locks = stakedLock[0].map((stake) => {
      return {
        amount:new BigNumber(stake[0]._hex).toJSON(),
        starttime:new BigNumber(stake[1]._hex).toJSON().concat("000"),
      }
    })
    return locks;
  })
  console.log(`userinfo---66->${JSON.stringify(parsedStakedLocks)}`)
  return parsedStakedLocks
}

export const fetchFarmUserEarnings = async (account: string) => {
  const masterChefAddress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'pendingCake',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(masterchefABI, calls)
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
