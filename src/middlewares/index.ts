import checkClient from './checkClient.ts'

export default app => {
  // 日志记录
  app.use(checkClient)
}
