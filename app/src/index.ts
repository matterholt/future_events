import { serve } from '@hono/node-server'
import { Hono } from 'hono'


import {Login, FutureEvents,CurrentDate} from './features'

const app = new Hono()





app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('/login', Login)

app.route('/future-events', FutureEvents)

app.route('/current-date', CurrentDate)


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
