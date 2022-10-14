import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          amount: 6000,
          category: 'Setup',
          createdAt: new Date('2022-10-14 09:00:00'),
          id: 1,
          title: 'Notebook novo',
          type: 'withdraw',
        },
        {
          amount: 2750,
          category: 'Desenvolvimento',
          createdAt: new Date('2022-10-09 11:00:00'),
          id: 2,
          title: 'Desenvolvimento de landing page',
          type: 'deposit',
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions',  () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)