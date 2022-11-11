import { useState, FormEvent} from 'react'
import Modal from 'react-modal'

import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, NewTransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps { 
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	const { createTransaction } = useTransactions()

	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState('')
	const [title, setTitle] = useState('')
	const [type, setType] = useState('deposit')

	async function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()

		await createTransaction({
			amount,
			category,
			title,
			type
		})

		clearForm()
		onRequestClose()
	}

	function clearForm() {
		setAmount(0)
		setCategory('')
		setType('deposit')
		setTitle('')
	}

	return (
		<Modal
			className="react-modal-content"
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
		>
			<Container onSubmit={handleCreateNewTransaction}>
				<button
					className="react-modal-close"
					onClick={onRequestClose}
					type="button"
				>
					<img alt="Fechar modal" src={closeImg}/>
				</button>

				<h2>Cadastrar transação</h2>

				<input
					onChange={(event) => setTitle(event.target.value)}
					placeholder="Título"
					type="text"
					value={title}
					required
				/>

				<input
					min='0'
					onChange={(event) => setAmount(Number(event.target.value))}
					placeholder="Valor"
					type="number"
					value={amount}
					required
				/>

				<NewTransactionTypeContainer>
					<RadioBox
						activeColor="green"
						isActive={type === 'deposit'}
						onClick={() => setType('deposit')}
						type="button"
					>
						<img alt="Entrada" src={incomeImg}/>
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						activeColor="red"
						isActive={type === 'withdraw'}
						onClick={() => setType('withdraw')}
						type="button"
					>
						<img alt="Saída" src={outcomeImg}/>
						<span>Saída</span>
					</RadioBox>
				</NewTransactionTypeContainer>

				<input
					onChange={(event) => setCategory(event.target.value)}
					placeholder="Categoria"
					type="text"
					value={category}
					required
				/>
          
				<button type="submit">
          Cadastrar
				</button>
			</Container>
		</Modal>
	)
}