/*
 * @Author: your name
 * @Date: 2021-07-08 12:27:41
 * @LastEditTime: 2021-07-08 16:02:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \onlyfront\src\views\Farms\components\FarmTable\Actions\styles.ts
 */
import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 48px;
    margin-right: 0;
    margin-bottom: 0;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 8px;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`

export const Subtle = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Earned = styled.div`
  font-weight: 600;
  font-size: 20px;
`

export const Staked = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`
