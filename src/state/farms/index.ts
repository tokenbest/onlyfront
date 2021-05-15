/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import farmsConfig from 'config/constants/farms'
import fetchFarms from './fetchFarms'
import {
  fetchFarmUserEarnings,
  fetchFarmUserAllowances,
  fetchFarmUserTokenBalances,
  fetchFarmUserStakedBalances,
  fetchFarmUserStakedLocks,
} from './fetchFarmUser'
import { FarmsState, Farm, StakedLock } from '../types'


const initialState: FarmsState = { data: [...farmsConfig] }

export const farmsSlice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setFarmsPublicData: (state, action) => {
      const liveFarmsData: Farm[] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
    },
    setFarmUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
  },
})

// Actions
export const { setFarmsPublicData, setFarmUserData } = farmsSlice.actions

// Thunks
export const fetchFarmsPublicDataAsync = () => async (dispatch) => {
  const farms = await fetchFarms()
  dispatch(setFarmsPublicData(farms))
}
export const fetchFarmUserDataAsync = (account) => async (dispatch) => {
  const userFarmAllowances = await fetchFarmUserAllowances(account)
  const userFarmTokenBalances = await fetchFarmUserTokenBalances(account)
  const userStakedBalances = await fetchFarmUserStakedBalances(account)
  const userStakedLocks = await fetchFarmUserStakedLocks(account)
  const userFarmEarnings = await fetchFarmUserEarnings(account)
  const  now= new BigNumber(new Date().getTime());

  const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
    const cstakedLocks:StakedLock[] = [];
    let freeAmount:BigNumber = new BigNumber(userStakedBalances[index].stakedFreeAmount);
    for(let i=0;i<userStakedLocks[index].length;i++){
      const staked = userStakedLocks[index][i];
      const expdate = new BigNumber(staked.starttime).plus(new BigNumber(30*60*1000));
      if(expdate.gte(now)){
        cstakedLocks.push(staked)
      }else{
        freeAmount = freeAmount.plus(new BigNumber(staked.amount));
      }
    }

    return {
      index,
      allowance: userFarmAllowances[index],
      tokenBalance: userFarmTokenBalances[index],
      stakedLocks: cstakedLocks,
      stakedBalance: userStakedBalances[index].stakedBalance,
      stakedFreeAmount: freeAmount.toJSON(),
      earnings: userFarmEarnings[index],
    }
  })

  dispatch(setFarmUserData({ arrayOfUserDataObjects }))
}

export default farmsSlice.reducer
