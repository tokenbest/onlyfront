import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@tokenbest/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledWP= styled.div`
  align-items: center;
  background-color: rgb(1, 12, 28);
  color: rgb(31, 199, 212);
`

const WhitePaper = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledWP>
      <p>What is PartyChain?</p>
      </StyledWP>
    </Page>
  )
}

export default WhitePaper
