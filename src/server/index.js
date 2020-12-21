import express from 'express'
import loadRoutes from '../routes'
import handleError from '../utils/handleError'

const server = express()

server.use(express.json())

loadRoutes(server)

server.use(handleError.handleError)

export default server
