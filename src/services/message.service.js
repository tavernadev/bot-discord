import handleError from '../utils/handleError'

const SendMessage = function (req, res, next) {
  console.log('MessageService.SendMessage', req.body)
  if (!req.body.message || !req.body.channelId) {
    handleError.errorMessage({
      statusCode: 400,
      origin: 'MessageService.SendMessage',
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
