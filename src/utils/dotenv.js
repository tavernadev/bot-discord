if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.dev' })
  console.log('Dotenv Loaded from .env.dev')
}
console.log('ENVIRONMENT VARIABLES')
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('PORT', process.env.PORT)
