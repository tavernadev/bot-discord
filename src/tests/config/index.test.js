import Config from '../../config'

describe('Test Environment Variables from .env.dev', () => {
  it('NODE_ENV should be test', () => {
    expect(Config.NODE_ENV).toEqual('test')
  })
  it('PORT should be 5000', () => {
    expect(Config.PORT).toEqual('5000')
  })
})
