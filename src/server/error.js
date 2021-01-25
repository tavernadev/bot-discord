function handler (err, req, res, next) {
  res.status(err.statusCode)
  console.error('Error: ' +
        '{ Origin: ' +
          err.origin +
        ', method: ' +
          err.method +
        ', reqBody: ' +
          err.reqBody +
        ', statusCode: ' +
          res.statusCode +
        ', message: ' +
          err.message +
        '}'
  )
  res.json({ error: err.message })
}

function notFound (req, res, next) {
  raise({
    statusCode: 404,
    origin: req.originalUrl,
    method: req.method,
    message: 'Not Found',
    body: req.body
  })
}

function raise ({ statusCode, origin, method, message, body }) {
  const errorMessage = {
    statusCode: statusCode,
    origin: origin,
    method: method,
    message: message,
    reqBody: JSON.stringify(body)
  }
  throw errorMessage
}

export default {
  handler,
  notFound,
  raise
}
