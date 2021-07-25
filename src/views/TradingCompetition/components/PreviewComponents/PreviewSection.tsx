/*
 * @Author: your name
 * @Date: 2021-07-23 20:42:51
 * @LastEditTime: 2021-07-23 21:42:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \onlyfront\src\views\TradingCompetition\components\PreviewComponents\PreviewSection.tsx
 */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '@tokenbest/uikit'
import { SectionProps } from '../../types'

const BackgroundColorWrapper = styled(Flex)<SectionProps>`
  min-height: calc(100vh - 64px);
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: ${({ backgroundStyle }) => backgroundStyle};
  margin: auto;
`

const ChildrenWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
`

const Section: React.FC<SectionProps> = ({ children, backgroundStyle = 'red' }) => {
  return (
    <BackgroundColorWrapper backgroundStyle={backgroundStyle}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </BackgroundColorWrapper>
  )
}

export default Section
