function handleError (err, req, res, next) {
  res.statusCode = err.statusCode || 500
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

function errorMessage ({ statusCode, origin, message, body }) {
  const errorMessage = {
    statusCode: statusCode,
    origin: origin,
    message: message,
    reqBody: JSON.stringify(body)
  }
  throw errorMessage
}

export default {
  handleError,
  errorMessage
}
