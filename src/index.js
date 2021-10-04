const thaiId = {

  /**
   * Verify
   *
   * @param {string|number} s string number
   * @returns {boolean}
   */
  verify (s = '') {
    // force convert number to string
    if (typeof s === 'number') s = s.toString()
    // no null
    if (!s) return false
    // must be number only
    if (isNaN(Number(s))) return false
    // length must match
    if (s.length !== 13) return false
    // checksum
    if (!this.isValidChecksum(s)) return false

    return true
  },

  getLastDigit (checksum) {
    return (11 - (checksum % 11)) % 10
  },

  isValidChecksum (s = '') {
    // checksum
    let checksum = 0
    for (let i = 0; i < 12; i++) checksum += (13 - i) * Number(s[i])
    if (Number(s[12]) !== this.getLastDigit(checksum)) return false
    return true
  },

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = thaiId
  exports.default = thaiId
}
