const fs = require('node:fs')

const stats = fs.statSync('./HelloWorld.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)

const text = fs.readFileSync('./HelloWorld.txt', 'utf-8')

console.log(text)