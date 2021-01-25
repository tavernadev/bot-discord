import server from './server'
import Config from './config'

server.listen(Config.PORT, () => {
  console.log(`Server Ready at http://localhost:${Config.PORT}`)
})
