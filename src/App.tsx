import { TransactionsProvider } from './hooks/useTransactions'

import Modal from 'react-modal'

import { Header } from './components/Header'
import { Dashbord } from './components/Dashbord'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
	return (
		<TransactionsProvider>
			<Header />
			<Dashbord />
			<GlobalStyle />
		</TransactionsProvider>
	)
}