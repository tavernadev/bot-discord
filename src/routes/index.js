import messageRouter from './message.router'
import helloRouter from './hello.router'

const apiPrefix = '/api'

export default function loadRoutes (Server) {
  Server.use(ConCat(messageRouter.Prefix), messageRouter.Router)
  Server.use('/api/v1', helloRouter)
}

function ConCat (routePrefix) {
  return apiPrefix + routePrefix
}
