/**
 * Verify
 *
 * @param {string} s string number
 * @returns {boolean}
 */
function verify () {
  return true
}

if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = {
    verify
  }
  exports.default = {
    verify
  }
}
