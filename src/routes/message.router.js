import express from 'express'
import RespPadrao from '../services/message.service'

const Prefix = '/v1/message'
const Router = express.Router()

Router.get('/a', RespPadrao)
  .put('/b', RespPadrao)
  .post(RespPadrao)
  .delete(RespPadrao)

export default {
  Prefix,
  Router
}
