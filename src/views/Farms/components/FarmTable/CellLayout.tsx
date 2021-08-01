import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-size: 20px;
  color: #3D6BF3;
  text-align: left;
  margin-bottom:10px;

  @media screen and (max-width: 750px) {
    font-size: 12px;
  }
`

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
  font-size:20px;
`

interface CellLayoutProps {
  label?: string
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = '', children }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default CellLayout
