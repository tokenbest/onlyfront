import React, { useState, useRef, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, useMatchBreakpoints } from '@tokenbest/uikit'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import { useHarvest, useHarvestComp } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import { usePriceCakeBusd } from 'state/hooks'
import { useCountUp } from 'react-countup'

import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, Earned, Staked } from './styles'

const HarvestAction: React.FunctionComponent<FarmWithStakedValue> = ({ pid, userData }) => {
  const { account } = useWeb3React()
  const earningsBigNumber = userData && account ? new BigNumber(userData.earnings) : null
  const cakePrice = usePriceCakeBusd()
  let earnings = null
  let earningsBusd = 0
  let displayBalance = '?'

  if (earningsBigNumber) {
    earnings = getBalanceNumber(earningsBigNumber)
    earningsBusd = new BigNumber(earnings).multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toLocaleString()
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onComp } = useHarvestComp(pid)
  const TranslateString = useI18n()

  const { isXl, isXs } = useMatchBreakpoints()

  const { countUp, update } = useCountUp({
    start: 0,
    end: earningsBusd,
    duration: 1,
    separator: ',',
    decimals: 3,
  })
  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(earningsBusd)
  }, [earningsBusd, updateValue])

  return (
    <ActionContainer>
      <ActionTitles>
        <Title style={{ color: '#3D6BF3', fontSize: '16px' }}>TBA </Title>
        <Subtle style={{ color: '#3D6BF3', fontSize: '16px' }}>{TranslateString(999, 'EARNED')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned style={{ color: '#39D6FE', fontSize: '17px', margin: '0 0 10px 0' }}>{displayBalance}</Earned>
          <Staked style={{ color: '#3D6BF3', fontSize: '16px' }}>~{countUp}USD</Staked>
        </div>
        <Button
          disabled={!earnings || pendingTx || !account}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
          ml="4px"
          style={{ background: '#292929', color: '#000', height: '35px', padding: '0 15px', marginLeft: '15px' }}
        >
          {TranslateString(562, 'Harvest')}
        </Button>
        {isXl ?
          <Button
            disabled={!earnings || pendingTx || !account}
            onClick={async () => {
              setPendingTx(true)
              await onComp()
              setPendingTx(false)
            }}
            ml="4px"
            style={{ background: '#292929', color: '#000', height: '35px', padding: '0 15px' }}
          >
            {TranslateString(562, 'Compound')}
          </Button>
          : null
        }
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
