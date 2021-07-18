import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@tokenbest/uikit'
// import { Heading, Text, BaseLayout } from 'uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import ShareCard from 'views/Home/components/ShareCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import Farms from 'views/Farms'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/wall_1.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-image: url('/images/wall_1.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    // background-position: left center, right center;
    height: 365px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: center;
  justify-content:space-between;
  margin-bottom: 32px;
  height:374px;
  display:flex;
  padding:0 30px;
  background:url('/images/slices/table-bg.png') no-repeat;
  background-size:100% 100%;
  grid-gap:0;

  & > div {
   width:444px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      background:url('/images/slices/card.png') no-repeat;
      background-size:100% 100%;
      height:267px;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      {/* <Hero /> */}
      <div>
        <img src="/images/wall_1.png" height={365} alt="ad" />
      </div>
      <div>
        <Farms />
      </div>
      <div>
        {/* <Cards>
          <FarmStakingCard />
          <LotteryCard />
        </Cards> */}
        {/* <CTACards>
          <EarnAPYCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards> */}
        <Cards>
          <ShareCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
