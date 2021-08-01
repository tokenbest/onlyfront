import React, { useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from '@tokenbest/uikit'
import useI18n from 'hooks/useI18n'

import Apr, { AprProps } from './Apr'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  apr: AprProps
  apy: AprProps
  farm: FarmProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
}

// const cells = {
//   apr: Apr,
//   apy: Apr,
//   farm: Farm,
//   earned: Earned,
//   details: Details,
//   multiplier: Multiplier,
//   liquidity: Liquidity,
// }


const generateComponetFunc = (children: string) => (() => (<span style={{ color: '#3D6BF3', fontSize: '12px' }}>{children}</span>))
// TODO: 写死的数值
const cells = {
  apr: Apr,
  apy: Apr,
  farm: Farm,
  earned: generateComponetFunc('0'),
  details: Details,
  multiplier: Multiplier,
  liquidity: generateComponetFunc('0'),
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:center;
  padding-right: 8px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
    font-size:24px;
  }

  /* @media screen and (max-width: 760px) {
    min-width: 100px;
  } */
`
const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid #29469B;

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
  }
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;

  @media screen and (max-width: 750px) {
    display: flex;
    align-items: center;
  }
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;

  @media screen and (max-width: 750px) {
    padding: 0;
    display: flex;
    align-items: center;

    > div {
      margin-top: -3px;
    }
  }
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
  @media screen and (max-width: 750px) {
    padding: 0;
  }
`

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { details } = props
  const [actionPanelToggled, setActionPanelToggled] = useState(false)
  const TranslateString = useI18n()

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled)
  }

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelToggled} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(736, 'APR')}>
                        {/* <Apr {...props.apr} hideButton={isMobile} /> */}
                        {
                          generateComponetFunc('∞%')()
                        }
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apy':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(736, 'APY')}>
                        {/* <Apr {...props.apy} hideButton={isMobile} /> */}
                        {
                          generateComponetFunc('∞%')()
                        }
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key} >
                    <CellInner>
                      <CellLayout
                        label={TranslateString(tableSchema[columnIndex].translationId, tableSchema[columnIndex].label)}
                      >
                        <div style={{ width: window.innerWidth < 750 && '90px'}} class-name="abc">{React.createElement(cells[key], props[key])}</div>
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td style={{ display: 'flex', alignItems: 'center', flex: 1}}>
          <tr style={{ width: window.innerWidth < 375 && '90px'}}>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
            <EarnedMobileCell>
              <CellLayout label={TranslateString(1072, 'Earned')}>
                <Earned {...props.earned} />
              </CellLayout>
            </EarnedMobileCell>
            <AprMobileCell>
              <CellLayout label={TranslateString(736, 'APR')}>
                <Apr {...props.apr} hideButton />
              </CellLayout>
            </AprMobileCell>
          </tr>
        </td>
        <td style={{ width: window.innerWidth < 750 && '36px' }}>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelToggled} />
            </CellLayout>
          </CellInner>
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {actionPanelToggled && details && (
        <tr>
          <td colSpan={8}>
            <ActionPanel {...props} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
