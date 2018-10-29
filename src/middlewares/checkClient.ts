import path from 'path'

export default function checkClient(req, res, next) {
  const _path = req.path

  if (/^\/api/i.test(_path)) {
    next()
    return
  }

  if (_path.match(/\.bundle\.js$/)) {
    const pathArr = _path.split('/')
    const newPath = pathArr[pathArr.length - 1]
    res.sendFile(path.resolve(__dirname, `../../../ts/dist/${newPath}`))
    return
  }
  // 打包的资源文件
  if (_path.match(/dist\/*/)) {
    const bluefile = _path.substring(_path.indexOf('/dist/') + 1, _path.length)
    const file = bluefile.replace('dist/', '')
    res.sendFile(path.resolve(__dirname, `../../../ts/dist/${file}`))
    return
  }
  res.sendFile(path.resolve(__dirname, '../../../ts/dist/index.html'))
  return
}
