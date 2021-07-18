/*
 * @Author: your name
 * @Date: 2021-07-08 12:27:41
 * @LastEditTime: 2021-07-08 15:45:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \onlyfront\src\views\Profile\components\SecondaryCard.tsx
 */
import styled from 'styled-components'
import { Text } from '@tokenbest/uikit'

const SecondaryCard = styled(Text)`
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
`

SecondaryCard.defaultProps = {
  p: '24px',
}

export default SecondaryCard
