import '../utils/dotenv'

const Config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT
}

console.log('ENVIRONMENT VARIABLES')
console.log(JSON.stringify(Config))

export default Config
