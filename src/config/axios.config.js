const isProd = process.env.NODE_ENV === 'production'

let BASE_URL
let IMAGE_PREFIX
if (isProd) {
  BASE_URL = 'https://t-shop-api.yjgyl.com.cn/api/admin' // 生产地址
  IMAGE_PREFIX = 'https://t-shop-api.yjgyl.com.cn' // 生产地址
} else {
  BASE_URL = 'http://localhost:8080/api/admin'
  IMAGE_PREFIX = 'http://localhost:8080'
}

export {
  BASE_URL,
  IMAGE_PREFIX
}
