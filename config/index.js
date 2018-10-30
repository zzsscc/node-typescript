// 使用nodejs的os模块
import os from 'os'

const ENV = process.env.npm_package_betterScripts_start_server_dev_env_NODE_ENV

const localIp = () => {
  const ip = []
  const allNwIntf = os.networkInterfaces()
  Object.keys(allNwIntf).map((intf) => {
    allNwIntf[intf].map(it => {
      if (it.family === 'IPv4' && !it.internal) {
        ip.push(it.address)
      }
    })
  })
  return ip
}

const getPort = () => {
  return {
    localdev: 3960,
    development: 3960,
    aliyunqa: 3960,
    aliyunqa1: 3960,
    aliyunqa2: 3960,
    aliyunqa3: 3960,
    pre: 3960,
    production: 3960,
  }[ENV]
}

const getServerName = () => {
  return {
    localdev: `http://${localIp()[0]}:3960`, // Note: 本地test使用
    development: '',
    aliyunqa: 'https://express-rider-bff-qa.dwbops.com',
    aliyunqa1: 'https://express-rider-bff-qa1.dwbops.com',
    aliyunqa2: 'https://express-rider-bff-qa2.dwbops.com',
    aliyunqa3: 'https://express-rider-bff-qa3.dwbops.com',
    pre: 'https://express-rider-bff.dianwoda.com',
    production: 'https://express-rider-bff.dianwoda.com',
  }[ENV]
}

export default {
  port: getPort(),
  serverName: getServerName()
}
