import { Toast } from '@tokenbest/uikit'
import BigNumber from 'bignumber.js'
import { CampaignType, FarmConfig, Nft, PoolConfig, Team } from 'config/constants/types'

export type TranslatableText =
  | string
  | {
      id: number
      fallback: string
      data?: {
        [key: string]: string | number
      }
    }

export interface StakedLock {
  amount: BigNumber
  starttime: BigNumber
}

export interface Farm extends FarmConfig {
  tokenAmount?: BigNumber
  quoteTokenAmount?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  tokenPriceVsQuote?: BigNumber
  tokenAmountInLp?:BigNumber
  poolWeight?: BigNumber
  userData?: {
    allowance: BigNumber
    tokenBalance: BigNumber
    stakedBalance: BigNumber
    stakedFreeAmount: BigNumber
    earnings: BigNumber
    stakedLocks:StakedLock[]
  }
}

export interface Pool extends PoolConfig {
  totalStaked?: BigNumber
  startBlock?: number
  endBlock?: number
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface Profile {
  userId: number
  points: number
  teamId: number
  nftAddress: string
  tokenId: number
  isActive: boolean
  username: string
  nft?: Nft
  team: Team
  hasRegistered: boolean
}

// Slices states

export interface ToastsState {
  data: Toast[]
}

export interface FarmsState {
  data: Farm[]
}

export interface PoolsState {
  data: Pool[]
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
}

export type TeamResponse = {
  0: string
  1: string
  2: string
  3: string
  4: boolean
}

export type TeamsById = {
  [key: string]: Team
}

export interface TeamsState {
  isInitialized: boolean
  isLoading: boolean
  data: TeamsById
}

export interface Achievement {
  id: string
  type: CampaignType
  address: string
  title: TranslatableText
  description?: TranslatableText
  badge: string
  points: number
}

export interface AchievementState {
  data: Achievement[]
}

// API Price State
export interface PriceApiList {
  /* eslint-disable camelcase */
  [key: string]: {
    name: string
    symbol: string
    price: string
    price_BNB: string
  }
}

export interface PriceApiListThunk {
  /* eslint-disable camelcase */
  [key: string]: number
}

export interface PriceApiResponse {
  /* eslint-disable camelcase */
  updated_at: string
  data: PriceApiList
}

export interface PriceApiThunk {
  /* eslint-disable camelcase */
  updated_at: string
  data: PriceApiListThunk
}

export interface PriceState {
  isLoading: boolean
  lastUpdated: string
  data: PriceApiListThunk
}

// API Price State
export interface PriceList {
  [key: string]: number
}

// export interface PriceApiResponse {
//   /* eslint-disable camelcase */
//   update_at: string
//   prices: PriceList
// }

export interface PriceState {
  isLoading: boolean
  lastUpdated: string
  data: PriceList
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Global state

export interface State {
  farms: FarmsState
  toasts: ToastsState
  prices: PriceState
  pools: PoolsState
  profile: ProfileState
  teams: TeamsState
  achievements: AchievementState
  block: BlockState
}
