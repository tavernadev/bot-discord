if (['development', 'test'].includes(process.env.NODE_ENV)) {
  require('dotenv').config({ path: '.env.dev' })
  console.log('Environment Loaded from Dotenv .env.dev')
}
