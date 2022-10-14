import { useState } from 'react'

import { NewTransactionModal } from '../NewTransactionModal'

import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DtMoney"/>
        <button onClick={handleOpenNewTransactionModal} type="button">Nova transação</button>
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </Content>
    </Container>
  )
}