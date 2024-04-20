import { Hono } from 'hono'

import { poweredBy } from 'hono/powered-by'
import { logger } from 'hono/logger'
import { basicAuth } from 'hono/basic-auth'

export const Login = new Hono()

Login.use(poweredBy())
Login.use(logger())




Login.get('/', (c) => {
    return c.text('Login page')
})