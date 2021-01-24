import request from 'supertest'
import server from '../../server'

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(server)
      .post('/api/v1/message')
      .then(response => {
        expect(response.statusCode).toBe(400)
      })
  })
})
