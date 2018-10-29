import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,user-code,X-Requested-With,DAdditional-info')
  res.header('Access-Control-Allow-Credentials', 'true')
  if (req.path === '/favicon.ico') {
    return res.status(404).send()
  }
  next()
})

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true, limit: '4mb' }))
app.use(bodyParser.json())

// 加载指定目录静态资源
app.use(express.static(path.resolve(__dirname, '../../ts/dist/')))

app.get('/api/mock', (req, res) => {
  res.send({
    data: 'hello world',
  })
})

export { app as default }
