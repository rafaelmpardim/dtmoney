import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../services/api"

interface Transaction {
  amount: number
  category: string
  createdAt: string
  id: number
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

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(sortTransactionsByCreatedAt(response.data.transactions)))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
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