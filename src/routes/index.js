import messageRouter from './message.route'

export default function loadRoutes (Server) {
  Server.use(api(messageRouter.prefix), messageRouter.router)
}

function api (routePrefix) {
  return `/api${routePrefix}`
}
