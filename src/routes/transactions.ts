import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transação de teste',
        amount: 10000,
      })
      .returning('*')

    return transactions
  })
}
