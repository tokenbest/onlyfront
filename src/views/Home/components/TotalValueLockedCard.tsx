import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@tokenbest/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTvl } from 'state/hooks'

const StyledTotalValueLockedCard = styled(Card)`
  width:100%; 
  align-items: center;
  display: flex;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  const tvl = useTvl().toNumber().toLocaleString('en-US', { maximumFractionDigits: 0 })
  return (
    <StyledTotalValueLockedCard>
      <CardBody style={{
        width: '100%',
        height: '100%',
        padding: window.innerWidth > 750 ? '55px 0 0 65px' : '',
        
      }}>
        <Heading size="lg" mb="24px" style={{
          fontSize: window.innerWidth > 750 ? '24px' : '20px',
          marginTop: window.innerWidth > 750 ? '' : '42px'
        }}>
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Heading>
        {tvl ? (
          <>
            <Heading size="xl" mb="24px">$0</Heading>
            <Text style={{ fontSize: window.innerWidth > 750 ? '16px' : '20px' }} color="#3D6BF3">{TranslateString(764, 'Across all LPs')}</Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
