import error from '../server/error'

const SendMessage = function (req, res, next) {
  console.log('MessageService.SendMessage', req.body)
  if (!req.body.message || !req.body.channelId) {
    error.raise({
      statusCode: 400,
      origin: '/api/v1/message',
      method: 'POST',
      message: 'No Message or No ChannelId!',
      body: req.body
    })
  }

  const obj = {
    message: req.body.message,
    channelId: req.body.channelId
  }
  res.send(obj)
  next()
}

export default {
  SendMessage
}
