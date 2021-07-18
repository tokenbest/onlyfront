import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
  padding-left: 0;
  padding-right: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 0;
    padding-right: 0;
  }
`

export default Container
