import { Server } from 'http'
import config from '../config/index.js'
import app from './services/express.ts'
import middlewares from './middlewares/index.ts'
// import { TYPE } from './util/frameworkConstants.ts'
// import { container } from "./services/ioc.ts"

middlewares(app)

const server = new Server(app)

// const config = container.get<Config>(TYPE.Config)
server.listen(config.port, (err) => {
  if (err) {
    console.error(err.stack || err)
    return
  }
  console.info(`server running http://localhost:${config.port}`)
})
