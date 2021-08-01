/*
 * @Author: your name
 * @Date: 2021-07-08 20:07:39
 * @LastEditTime: 2021-07-23 22:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \onlyfront\src\views\Home\components\ShareCard.tsx
 */
import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@tokenbest/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTvl } from 'state/hooks'

const StyledTotalValueLockedCard = styled(Card)`
  width: 100%;
  align-items: center;
  display: flex;
`

const Icons = styled.div`
  display: flex;
  color: red;

  @media screen and (max-width: 750px) {
    justify-content: space-around;
  }
`

const Img1 = styled.div`
  background: url('/images/slices/1.png') no-repeat;
  background-size: 100% 100%;
  width: 80px;
  height: 80px;
  cursor: pointer;

  &:hover {
    background-image: url('/images/slices/1-hover.png');
  }
`

const Img2 = styled.div`
  background: url('/images/slices/2.png') no-repeat;
  background-size: 100% 100%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    background-image: url('/images/slices/2-hover.png');
  }
`
const Img3 = styled.div`
  background: url('/images/slices/3.png') no-repeat;
  background-size: 100% 100%;
  width: 80px;
  height: 80px;
  cursor: pointer;

  &:hover {
    background-image: url('/images/slices/3-hover.png');
  }
`

const ShareCard = () => {
  const TranslateString = useI18n()
  const data = useGetStats()
  const tvl = useTvl().toNumber().toLocaleString('en-US', { maximumFractionDigits: 0 })
  return (
    <StyledTotalValueLockedCard>
      <CardBody style={{
        width: '100%',
        height: '100%',
        padding: window.innerWidth > 750 ? '55px 0 0 65px' : ''
      }}>
        <Heading size="lg" mb="30px" style={{
          fontSize: window.innerWidth > 750 ? '24px' : '20px',
          marginTop: window.innerWidth > 750 ? '' : '30px'
        }}>
          {TranslateString(762, 'Join Community')}
        </Heading>

        <Icons style={{ paddingLeft: window.innerWidth < 750 && '6px' }}>
          <Img1
            onClick={() => {
              openUrl('https://t.me/partychainclub')
            }}
          />
          <Img2 />
          <Img3
            onClick={() => {
              openUrl('https://www.facebook.com/PartyChain')
            }}
          />
        </Icons>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

const openUrl = (url) => {
  window.open(url)
}

export default ShareCard
