import request from 'supertest'
import server from '../../server'

const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {})

describe('Test Message Route', () => {
  test('It should send a message successfully', () => {
    const body = { message: 'test', channelId: '1234' }
    return request(server)
      .post('/api/v1/message')
      .send(body)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(body)
      })
  })

  test('It should return 400', () => {
    const body = { error: 'No Message or No ChannelId!' }
    return request(server)
      .post('/api/v1/message')
      .then(response => {
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(body)
        expect(spy).toHaveBeenCalled()
      })
  })
})
