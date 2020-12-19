import { hello } from '../index'

describe('Test Hello World!', () => {
  test('it should return Hello World!', () => {
    const result = hello('Hello World!')
    expect(result).toEqual('Hello World!')
  })
})
