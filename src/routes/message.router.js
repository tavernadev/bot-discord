import express from 'express'
import MessageService from '../services/message.service'
import handleRoute from '../utils/handleRoute'

const Prefix = '/v1/message/'
const Router = express.Router()

Router.post('/', handleRoute(MessageService.SendMessage))

export default {
  Prefix,
  Router
}
