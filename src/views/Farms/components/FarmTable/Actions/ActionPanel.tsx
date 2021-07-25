import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { LinkExternal, Text, OpenNewIcon } from '@tokenbest/uikit'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { communityFarms } from 'config/constants'

import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'

export interface ActionPanelProps {
  apr: AprProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
}

const Container = styled.div`
  background: #001533;
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;

  >div{
    width:366px;
    border-color:#39D6FE;
    height:106px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
   
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, apr, multiplier, liquidity }) => {
  const farm = details

  const TranslateString = useI18n()
  const isActive = farm.multiplier !== '0X'
  const { quoteToken, token, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const bsc = `https://bscscan.com/address/${lpAddress}`
  const info = `https://pancakeswap.info/pair123/${lpAddress}`
  const isCommunityFarm = communityFarms.includes(token.symbol)

  
  const StyledLikeLink = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    color: #1FC7D4;
    margin-bottom: 4px;
    font-size: 16px;
  `;

  // imitate linke style 
  const LikeLink: React.FC = ({ children }) => (
    <StyledLikeLink>
      <p>{ children }</p>
      <OpenNewIcon color="primary" ml="4px" />
    </StyledLikeLink>
  )

  return (
    <Container>
      <InfoContainer>
        {isActive && (
          <StakeContainer as="div">
            <LikeLink>
              {TranslateString(999, `Get ${lpLabel}`, { name: lpLabel })}
            </LikeLink>
          </StakeContainer>
        )}
        {/* <StyledLinkExternal href={bsc}>{TranslateString(999, 'View Contract')}</StyledLinkExternal> */}
        {/* <StyledLinkExternal href={info}>{TranslateString(999, 'See Pair Info')}</StyledLinkExternal> */}
        <LikeLink>{TranslateString(999, 'View Contract')}</LikeLink>
        <LikeLink>{TranslateString(999, 'See Pair Info')}</LikeLink>
      </InfoContainer>
      <ValueContainer>
        <ValueWrapper>
          <Text>{TranslateString(736, 'APR')}</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Multiplier')}</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Liquidity')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
      </ValueContainer>
      <ActionContainer>
        <HarvestAction {...farm} />
        <StakedAction {...farm} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
