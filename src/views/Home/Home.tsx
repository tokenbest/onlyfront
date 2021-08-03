import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@tokenbest/uikit'
import Page from 'components/layout/Page'
import CakeStats from 'views/Home/components/CakeStats'
import ShareCard from 'views/Home/components/ShareCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import Farms from 'views/Farms'
import {WOW} from 'wowjs'



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
  & > .wow > div {
    margin-bottom: 10px;
    @media screen and (max-width: 750px) {
      background:url('/images/slices/table-bg.png') no-repeat;
      background-size:100% 100%;
      height:267px;
    }
  }
`

const ImgWrapper = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: ${ (props: { pb?: string }) => props.pb || "54%" };
`

const Home: React.FC = () => {

  useEffect(() => {
    new WOW().init()
  }, [])

  return (
    <Page>
      <div>
        {
          window.innerWidth >= 750 && <img src="/images/wall_1.png" height={365} alt="ad" />
        }
        {
          window.innerWidth < 759 && <>
          <ImgWrapper>
            <img className="wow slideInDown" data-wow-delay="0.3s" src="/images/wall_2.png" alt="ad" />
          </ImgWrapper>
          <ImgWrapper pb="42%">
            <div className="wow slideInRight" data-wow-delay="0.4s">
              <img src="/images/wall_3.png" alt="ad" />
            </div>
          </ImgWrapper>
          </>
        }
      </div>
      <div>
        {
          window.innerWidth < 750
            ? <div className="wow slideInLeft" data-wow-delay="0.5s">
                <Farms />
              </div>
            : <Farms />
        }
        
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
            <div className="wow slideInRight" data-wow-delay="0.3s">
              <TotalValueLockedCard />
            </div>
            <div className="wow rollIn" data-wow-delay="0.4s">
              <CakeStats />
            </div>
            <div className="wow lightSpeedIn" data-wow-delay="0.5s">
              <ShareCard />
            </div>
          </PhoneTSC>
        }
      </div>
    </Page>
  )
}

export default Home
