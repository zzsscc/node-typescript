import { Server } from 'http'
import app from './services/express.ts'
import middlewares from './middlewares/index.ts'

middlewares(app)

const server = new Server(app)

server.listen(3001, (err) => {
  if (err) {
    console.error(err.stack || err)
    return
  }
  console.info('server running http://localhost:3001')
})
