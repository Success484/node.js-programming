const os = require('os')
console.log(os.homedir())
console.log(os.version())
console.log(os.type())

console.log(__dirname)
console.log(__filename)

const path = require('path')
console.log(path.basename(__filename))
console.log(path.dirname(__dirname))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

const {add, subtract, divide, multiply} = require('./math')

console.log(add(2,8))
console.log(subtract(8,2))
console.log(divide(8,2))
console.log(multiply(2,8))