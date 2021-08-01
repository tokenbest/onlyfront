import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@tokenbest/uikit'
import Page from 'components/layout/Page'
import CakeStats from 'views/Home/components/CakeStats'
import ShareCard from 'views/Home/components/ShareCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import Farms from 'views/Farms'
import { CSSTransition } from 'react-transition-group'
import './index.css'




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

const ImgWrapper = styled.div`
  height: 0;
  font-size: 0;
  padding-bottom: ${ (props: { pb?: string }) => props.pb || "54%" };
`

const Home: React.FC = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
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
            <CSSTransition
              in={show}
              classNames="my-node"
              timeout={2000}
              unmountOnExit
            >
              <img src="/images/wall_2.png" alt="ad" />
            </CSSTransition>
          </ImgWrapper>
          <ImgWrapper pb="42%">
            <CSSTransition
              in={show}
              classNames="second"
              timeout={2000}
              unmountOnExit
            >
              <img src="/images/wall_3.png" alt="ad" />
            </CSSTransition>
          </ImgWrapper>
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
