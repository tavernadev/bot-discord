import request from 'supertest'
import server from '../../server'

describe('Test Server Error Handle', () => {
  it('It should return 404', () => {
    const body = { error: 'Not Found' }
    return request(server)
      .post('/')
      .then(response => {
        expect(response.statusCode).toBe(404)
        expect(response.body).toEqual(body)
      })
  })
})
