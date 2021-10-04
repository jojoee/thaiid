const thaiId = require('./index')
jest.autoMockOff()

describe('verify', () => {
  test('normal', () => {
    expect(thaiId.verify('1234567891234')).toBeTruthy()
  })
})
