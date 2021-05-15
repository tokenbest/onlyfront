import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@tokenbest/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTvl } from 'state/hooks'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  const tvl = useTvl().toNumber().toLocaleString('en-US', { maximumFractionDigits: 0 })

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <Heading size="xl">{`$${tvl}`}</Heading>
            <Text color="textSubtle">{TranslateString(764, 'Across all LPs')}</Text>
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
