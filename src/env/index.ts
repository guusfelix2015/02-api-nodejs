import 'dotenv/config'

import { z } from 'zod'

const encSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = encSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('invalid enviroment variables', _env.error.format())

  throw new Error('Invalid enviroment variables.')
}

export const env = _env.data
