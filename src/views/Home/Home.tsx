import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@tokenbest/uikit'
import Page from 'components/layout/Page'
import CakeStats from 'views/Home/components/CakeStats'
import ShareCard from 'views/Home/components/ShareCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import Farms from 'views/Farms'



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
const PhoneTSC = styled.div`
  & > div {
    margin-bottom: 10px;
    @media screen and (max-width: 750px) {
      background:url('/images/slices/table-bg.png') no-repeat;
      background-size:100% 100%;
      height:267px;
    }
  }
`

const Home: React.FC = () => {

  return (
    <Page>
      <div>
        {
          window.innerWidth >= 750 && <img src="/images/wall_1.png" height={365} alt="ad" />
        }
        {
          window.innerWidth < 759 && <>
            <img src="/images/wall_2.png" alt="ad" />
            <img src="/images/wall_3.png" alt="ad" />
          </>
        }
      </div>
      <div>
        <Farms />
      </div>
      <div>
        {
          window.innerWidth > 750 && <Cards>
            <ShareCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        }

        {
          window.innerWidth < 750 && <PhoneTSC>
            <TotalValueLockedCard />
            <CakeStats />
            <ShareCard />
          </PhoneTSC>
        }
      </div>
    </Page>
  )
}

export default Home
