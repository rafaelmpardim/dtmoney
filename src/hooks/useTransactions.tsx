import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { addDoc, collection, getDocs, Firestore } from 'firebase/firestore/lite'

import { firebaseDb } from '../services/firebase'
interface Transaction {
  amount: number
  category: string
  createdAt: string
  title: string
  type: string
}

type TransactionInput = Omit<Transaction, 'createdAt' | 'id' >

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  createTransaction: (transaction: TransactionInput) => Promise<void>
  transactions: Transaction[]
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	async function getTransactions(db: Firestore) {
		const transactionsCol = collection(db, 'transactions')
		const transactionsSnapshot = await getDocs(transactionsCol)
		const transactionsList = transactionsSnapshot.docs.map(doc => doc.data())
		setTransactions(sortTransactionsByCreatedAt(transactionsList as Transaction[]))
		
		return transactionsList
	}

	useEffect(() => {
		getTransactions(firebaseDb)
	}, [])

	async function createTransaction(transactionInput: TransactionInput) {
		const data = {
			...transactionInput,
			createdAt: new Date().toString()
		}

		const response = await addDoc(collection(firebaseDb, 'transactions'), data)

		setTransactions(sortTransactionsByCreatedAt([
			...transactions,
			data
		]))
	}

	function sortTransactionsByCreatedAt(transactions: Transaction[]) {
		const hatefulTransaction = transactions.sort((a, b) => {
			if (a.createdAt > b.createdAt) { return 1 }
			else if (a.createdAt < b.createdAt) { return -1}
			else { return 0 }})
			.reverse()

		return [...hatefulTransaction]
	}
  
	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTransactions() {
	const context = useContext(TransactionsContext)
	return context
}