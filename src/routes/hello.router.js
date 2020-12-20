import express from 'express'

const helloRouter = express.Router()

helloRouter.route('/hello')
  .get(RespPadrao)
  .put(RespPadrao)
  .post(RespPadrao)
  .delete(RespPadrao)

function RespPadrao (req, res, next) {
  res.send('PADRAO')
  next()
}

export default helloRouter
