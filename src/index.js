const thaiId = {

  /**
   * Verify Thai Nationality ID string
   *
   * @param {string|number} [s=''] string number e.g. "1234567891020", 3648905117022
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

  /**
   * Get last digit (13th number) of Thai Nationality ID
   *
   * @private
   * @param {number} checksum
   * @returns {number} single digit in range [0-9] e.g. 1, 4
   */
  getLastDigit (checksum) {
    return (11 - (checksum % 11)) % 10
  },

  /**
   * Validate checksum value of Thai Nationality ID
   *
   * @private
   * @param {string} s
   * @returns {boolean}
   */
  isValidChecksum (s) {
    let checksum = 0
    for (let i = 0; i < 12; i++) checksum += (13 - i) * Number(s[i])
    if (Number(s[12]) !== this.getLastDigit(checksum)) return false

    return true
  },

  /**
   * Get random integer number [min, max] (utility function)
   *
   * @private
   * @param {number} min min (integer number)
   * @param {number} max max (integer number)
   * @returns {number} random integer number
   */
  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  /**
   * Get random Thai Nationality ID
   *
   * @returns {string} random generated Thai Nationality ID
   */
  random () {
    let checksum = 0
    let s = ''
    for (let i = 0; i < 12; i++) {
      const r = this.getRandomInt(0, 9)
      checksum += (13 - i) * r
      s += String(r)
    }

    return s + this.getLastDigit(checksum)
  }
}

if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = thaiId
  exports.default = thaiId
}
