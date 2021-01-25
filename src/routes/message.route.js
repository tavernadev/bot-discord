import express from 'express'
import MessageService from '../services/message.service'
import handleRoute from '../utils/handleRoute'

const prefix = '/v1/message/'
const router = express.Router()

router.post('/', handleRoute(MessageService.SendMessage))

export default {
  prefix,
  router
}
