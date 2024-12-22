import { expect, test, beforeAll, afterAll } from 'vitest'
import { app } from '../src/app'
import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('should create a new trasaction', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New transaction',
    amount: 4000,
    type: 'credit',
  })

  expect(response.statusCode).toEqual(201)
})
