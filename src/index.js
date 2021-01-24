import './utils/dotenv'
import server from './server'

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server Ready at http://localhost:${port}`)
})
