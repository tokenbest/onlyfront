import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'

const StyledWP= styled.div`
  align-items: center;
  background-color: rgb(1, 12, 28);
  color: rgb(31, 199, 212);

  .article {
    font-size: 18px;

    &:not(:last-of-type) {
      margin-bottom: 60px;
    }

    > span {
      font-size: 22px;
      margin-bottom: 20px;
      display: inline-block;
    }

    > p {
      margin-bottom: 4px;
    }

  }
  .cpoyright {
    text-align: center;
    font-size: 18px;
  }
`

const WhitePaper = () => {

  return (
    <Page>
      <StyledWP>
        <div className="article">
          <span>What is PartyChain?</span>
          <p>PartyChain is an online marketplace, yield farming aggregator and social media platform on Binance Smart Chain that let you find travel partners, exchange languages, farm and shop online.</p>
          <p>We are the first on BSC that introduce real economy to our Defi users.</p>
        </div>

        <div className="article">
          <span>Roadmap</span>
          <p>Phase1: Social media platform(Mobile app and webpage will be launching in August 2021). All earnings(Including but not limited to: ads, membership fees, etc.) will be allocated to buyback PartyChain tokens and burn.</p>
          <p>Phase2: Vaults/Yield farming(Similar to Autofarm/Beefy). All earnings will be allocated to buyback PartyChain tokens and burn.</p>
          <p>Phase3: Online marketplace(Similar to Amazon/eBay/Wish). All earnings will be allocated to buyback PartyChain tokens and burn.</p>
          <p>Phase4: NFT trading platform. All earnings will be allocated to buyback PartyChain tokens and burn.</p>
          <p>Phase5: Investing in real economy(eg. Nightclubs, restaurants, convenience stores,etc.). All earnings will be allocated to buyback PartyChain tokens and burn.</p>
        </div>

        <div className="article">
          <span>Tokenomics</span>
          <p>No pre-sale and PartyChain tokens minting will start on 30 July 2021.</p>
          <p>Emission of Partychain tokens is 10 per block. Approximately 28,800 PartyChain tokens to be minted daily.</p>
          <p>Starting price is around 0.03 BUSD for 1 token.</p>
          <p>Initial 1,000,000 PartyChain tokens and 30% of the emission are dedicated to the team to ensure effective marketing, sustainable and rapid innovation.</p>
          <p>70% of the emission is distributed to our farms/vaults.</p>
          <p>There&apos;s currently no hard cap on the supply of PartyChain token, making it an inflationary token.</p>
          <p>The team aims to making deflation higher than emission by building deflationary mechanisms into PartyChain&apos;s products. The goal is for more tokens to leave circulation than the amount of tokens that&apos;s produced.</p>
          <p>All deposits of liquidity mining will be locked up withdrawal for 30 days, but the rewards you receive can be harvested or compounded during the locking period. It is subject to change WITH prior notice.</p>
        </div>

        <div className="article">
          <span>Governance</span>
          <p>PartyChain token holders will have the right to decide the emission rate, which businesses do we participate, the path of PartyChain and many more in the future.</p>
        </div>

        <div className="cpoyright">
          All rights reserved 2021 Partychain.club
        </div>

      </StyledWP>
    </Page>
  )
}

export default WhitePaper
