// Sync

const fs = require('node:fs')

const text = fs.readFileSync('./HelloWorld.txt', 'utf-8')
console.log('Leyendo el primer archivo...')
console.log(text)

const secondText = fs.readFileSync('./HelloWorldTwo.txt', 'utf-8')
console.log('Leyendo el segundo archivo...')
console.log(secondText)

// Async

console.log('Leyendo el primer archivo...')

fs.readFile('./HelloWorld.txt', 'utf-8', (err, text) => {
    console.log('Primer texo:', text)
})

console.log('--> Ejecutando otros procesos mientrsas lee el archivo...')

console.log('Leyendo el segundo archivo...')

fs.readFile('HelloWorldTwo.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto:', text)
})

