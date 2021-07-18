/*
 * @Author: your name
 * @Date: 2021-07-08 12:27:41
 * @LastEditTime: 2021-07-08 15:17:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \onlyfront\src\views\Farms\components\FarmTable\FarmTable.tsx
 */
import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType } from '@tokenbest/uikit'
import useI18n from 'hooks/useI18n'

import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  sortColumn?: string
}

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
  background:url('/images/slices/dong.png') no-repeat center -20px;
  background-size:348px 338px;
  &::-webkit-scrollbar {
    display: none;
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
    height:120px;
    td {
      font-size: 24px;
      vertical-align: middle;
    }
  }
`

const TableContainer = styled.div`
  position: relative;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const FarmTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const TranslateString = useI18n()
  const { data, columns } = props

  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
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
  )
}

export default FarmTable
