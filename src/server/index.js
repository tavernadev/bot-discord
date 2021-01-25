import express from 'express'
import loadRoutes from '../routes'
import error from './error'

const server = express()

server.use(express.json())

loadRoutes(server)

server.use(error.notFound)
server.use(error.handler)

export default server
