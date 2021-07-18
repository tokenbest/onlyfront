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

const Icons = styled.div`
  display:flex;
  color:red;
`

const Img1 = styled.div`
  background:url('/images/slices/1.png') no-repeat;
  background-size:100% 100%;
  width:80px;
  height:80px;
  cursor:pointer;
`

const Img2 = styled.div`
  background:url('/images/slices/2.png') no-repeat;
  background-size:100% 100%;
  width:80px;
  height:80px;
  cursor:pointer;
  margin:0 10px;
`
const Img3 = styled.div`
  background:url('/images/slices/3.png') no-repeat;
  background-size:100% 100%;
  width:80px;
  height:80px;
  cursor:pointer;
`

const ShareCard = () => {
  const TranslateString = useI18n()
  const data = useGetStats()
  const tvl = useTvl().toNumber().toLocaleString('en-US', { maximumFractionDigits: 0 })
  return (
    <StyledTotalValueLockedCard>
      <CardBody style={{ width: '100%', height: '100%', padding: '55px 0 0 65px' }}>
        <Heading size="lg" mb="30px" style={{ fontSize: '26px' }}>
          {TranslateString(762, 'Join Community')}
        </Heading>

        <Icons>
          <Img1/>
          <Img2/>
          <Img3/>
        </Icons>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default ShareCard
