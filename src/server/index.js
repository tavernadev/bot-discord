import express from 'express'
import loadRoutes from '../routes'

const server = express()

loadRoutes(server)

export default server
