import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Text, Button, Modal } from '@tokenbest/uikit'
import ModalActions from 'components/ModalActions'
import ModalInput from 'components/ModalInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance, getBalanceNumber, displayExpDate } from 'utils/formatBalance'
import { StakedLock } from 'state/types'

interface WithdrawModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  stakedLocks?: StakedLock[]
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, max, tokenName = '', stakedLocks }) => {
  const [val, setVal] = useState('0')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  const renderLocks = () => {
    console.log(`farms.comp.weithdrawmodal--locks-->${JSON.stringify(stakedLocks)}`)
    const locks = stakedLocks.map((staked) => {
      const stakeLockAmount = getBalanceNumber(staked.amount)
      const displaystakeAmount = stakeLockAmount.toLocaleString()
      const expdate = displayExpDate(new BigNumber(staked.starttime))
      return (
        <div>
          <Text>{displaystakeAmount}</Text><Text>Exp:{expdate}</Text>
        </div>
      )
    })
    return locks
  }

  return (
    <Modal title={TranslateString(1126, 'Unstake LP tokens')} onDismiss={onDismiss}>
      {renderLocks()}
      <ModalInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
        inputTitle={TranslateString(588, 'Unstake')}
      />
      <ModalActions>
        <Button variant="secondary" onClick={onDismiss} width="100%" style={{ background: '#003178' }}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
          width="100%"
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default WithdrawModal
