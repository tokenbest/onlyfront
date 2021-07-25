import React from 'react'
import { Card, CardBody, Heading, Text } from '@tokenbest/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody style={{ padding: '50px 70px 70px' }}>
        <Heading size="xl" mb="24px" style={{ fontSize: '24px' }}>
          {TranslateString(534, 'Stats')}
        </Heading>
        <Row>
          <Text fontSize="20px">{TranslateString(536, 'Total Supply')}</Text>
          {cakeSupply && <CardValue fontSize="20px" value={/* cakeSupply */ 0} color="#3D6BF3" />}
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="20px" decimals={0} value={burnedBalance} color="#3D6BF3" />
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(540, 'New TBA/block')}</Text>
          <CardValue fontSize="20px" decimals={0} value={10} color="#3D6BF3" />
        </Row>
      </CardBody>
    </StyledCakeStats >
  )
}

export default CakeStats
