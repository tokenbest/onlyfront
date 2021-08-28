
import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, ColumnType } from '@tokenbest/uikit'

import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  sortColumn?: string
}

const Box = styled.div``

const Img = styled.div`
  width:162px;
  height:68.4px;
  background:url('/images/slices/farms.png') no-repeat;
  background-size:100%;
  transform: scale(0.8);
  @media screen and (min-width: 360px) and (max-width: 750px) {
    width: 90px;
    height: 40px;
  }
`


const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  border-radius: 16px;
  margin: 0px;
  background:url('/images/slices/table-bg.png') no-repeat;
  background-size:100% 100%;
  min-height: 374px;
  padding-top:20px;
`

const TableWrapper = styled.div`
  overflow: visible;
  min-height: 374px;
  /* background:url('/images/slices/dong.png') no-repeat center -20px; */
  background-size:348px 338px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 360px) and (max-width: 750px) {
    padding-top: 26px;
  }


`

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`

const TableBody = styled.tbody`

  & tr {
    td {
      font-size: 24px;
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`

const TableContainer = styled.div`
  position: relative;
`


const FarmTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { data, columns } = props

  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  return (
    <Box>
      {/* {
        window.innerWidth < 750 ? <PhoneImg /> : <Img />
      } */}
      <Img />
      <Container>
        <TableContainer>
          <TableWrapper ref={tableWrapperEl}>
            <StyledTable>
              <TableBody>
                {rows.map((row) => {
                  return <Row {...row.original} key={`table-row-${row.id}`} />
                })}
              </TableBody>
            </StyledTable>
          </TableWrapper>
        </TableContainer>
      </Container>
    </Box>
  )
}

export default FarmTable
