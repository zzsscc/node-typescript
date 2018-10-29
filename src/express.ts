import express from 'express'
import fs from 'fs'
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

app.use((req, res, next) => {
  if (!req.path.match(/^\/api/)) {
    if (req.path.match(/\.bundle\.js$/)) {
      const pathArr = req.path.split('/')
      const newPath = pathArr[pathArr.length - 1]
      res.sendFile(path.resolve(__dirname, `../../ts/dist/${newPath}`))
      return
    }
    // 打包的资源文件
    if (req.path.match(/dist\/*/)) {
      const _path = req.path
      const bluefile = _path.substring(_path.indexOf('/dist/') + 1, _path.length)
      const file = bluefile.replace('dist/', '')
      res.sendFile(path.resolve(__dirname, `../../ts/dist/${file}`))
      return
    }
    res.sendFile(path.resolve(__dirname, '../../ts/dist/index.html'))
    return
  }
  next()
})

// 解决react-router BrowserRouter刷新后404
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../ts/index.html'))
// })

app.get('/api/mock', (req, res) => {
  res.send({
    data: 'hello world',
  })
})

app.listen(3001, () => {
  console.info('server running http://localhost:3001')
})
