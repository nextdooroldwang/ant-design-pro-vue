let baseUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://127.0.0.1:8080'
    break
  case 'alpha':
    baseUrl = 'http://52.196.185.208'
    break
  case 'production':
    baseUrl = 'http://47.91.210.60'
    break
}

export default baseUrl
