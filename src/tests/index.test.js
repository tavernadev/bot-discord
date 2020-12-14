import { hello } from '../index'
jest.mock('discord.js')

describe('Test Hello World!', () => {
  test('it should return Hello World!', () => {
    const result = hello('Hello World!')
    expect(result).toEqual('Hello World!')
  })
})
