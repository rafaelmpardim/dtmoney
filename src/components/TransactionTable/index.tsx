import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'

export function TransactionTable() {
	const { transactions } = useTransactions()

	if (transactions.length > 0) {
		return (
			<Container>
				<h2>Histórico de transações</h2>
				<table>
					<thead>
						<tr>
							<th>Título</th>
							<th>Valor</th>
							<th>Categoria</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction, i) => (
							<tr key={`Transaction${i}`}>
								<td>{transaction.title}</td>
								<td className={transaction.type}>
									{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									}).format(transaction.amount)}
								</td>
								<td>{transaction.category}</td>
								<td>
									{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
								</td>
							</tr>
						))
						}
					</tbody>
				</table>
			</Container>
		)
	} else {
		return (
			<Container>
				<span>
					Ainda não há lançamentos registrados. <br/>
					Crie um agora mesmo!
				</span>
			</Container>
		)
	}

}