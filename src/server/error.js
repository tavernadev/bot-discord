function handler (err, req, res, next) {
  res.status(err.statusCode || 500)
  console.error('Error: ' +
        '{ Origin: ' +
          err.origin +
        ', reqBody: ' +
          err.reqBody +
        ', StatusCode: ' +
          res.statusCode +
        ', message: ' +
          err.message +
        '}'
  )
  res.json({ error: err.message })
}

function raise ({ statusCode, origin, message, body }) {
  const errorMessage = {
    statusCode: statusCode,
    origin: origin,
    message: message,
    reqBody: JSON.stringify(body)
  }
  throw errorMessage
}

export default {
  handler,
  raise
}
