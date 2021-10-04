const thaiId = require('thaiid')

console.log(thaiId.random())
console.log(thaiId.verify(thaiId.random()))
console.log(thaiId.verify('1234567891234'))
