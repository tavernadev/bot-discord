import messageRouter from './message.router'

const apiPrefix = '/api'

export default function loadRoutes (Server) {
  Server.use(ConCat(messageRouter.Prefix), messageRouter.Router)
}

function ConCat (routePrefix) {
  return apiPrefix + routePrefix
}
