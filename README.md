# thaiid

[![Codecov](https://img.shields.io/codecov/c/github/jojoee/thaiid.svg)](https://codecov.io/github/jojoee/thaiid)
[![Version - npm](https://img.shields.io/npm/v/thaiid.svg)](https://www.npmjs.com/package/thaiid)
[![License - npm](https://img.shields.io/npm/l/thaiid.svg)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/jojoee/thaiid.svg)](https://greenkeeper.io/)
![continuous integration](https://github.com/jojoee/thaiid/workflows/continuous%20integration/badge.svg?branch=master)
![release](https://github.com/jojoee/thaiid/workflows/release/badge.svg?branch=master)
![runnable](https://github.com/jojoee/thaiid/workflows/runnable/badge.svg?branch=master)
![runnable old node](https://github.com/jojoee/thaiid/workflows/runnable%20old%20node/badge.svg?branch=master)

ภาษา: [ไทย](https://github.com/jojoee/thaiid/blob/master/README.md), [English](https://github.com/jojoee/thaiid/blob/master/README-en.md)

ตรวจสอบ และ สุ่ม หมายเลขบัตรประชนชน

## ติดตั้ง

```
// ติดตั้งด้วย CommonJS
npm install thaiid
const thaiId = require('thaiid')

// ติดตั้งด้วย githack
<script src="https://raw.githack.com/jojoee/thaiid/master/src/index.js"></script>

// ติดตั้งด้วย ES6
npm install thaiid
import * as thaiId from 'thaiid'
```

## ตัวอย่างการใช้งาน

```javascript
thaiId.random() // "3629525599913"
thaiId.random() // "9065089544709"

thaiId.verify('1915197333804') // true
thaiId.verify('1201131963762') // false
```

## ฟีเจอร์
- [x] Compatible with all browsers
- [x] Node.js version support: 6-12
- [x] 0 Dependencies
- [x] Unit test
- [ ] Browser compatibility test
- [ ] Support negative number
- [ ] Other programming languages version

## อ้างอิง
- [ปริศนาของเลขบัตรประชาชน13 หลัก](https://www.youtube.com/watch?v=tSlNbe_ss58)
- [เลขประจำตัวประชาชนไทย](https://th.wikipedia.org/wiki/เลขประจำตัวประชาชนไทย)
- [เลข 13 หลักในบัตรประชาชนสำคัญฉันใด](https://www.egov.go.th/th/content/817/78/)
- [ไขปริศนาเลขบัตรประชาชนไทย 13 หลัก](https://www.moe.go.th/ไขปริศนาเลขบัตรประชาชน)
