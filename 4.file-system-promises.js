const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./HelloWorld.txt', 'utf-8')
.then(text => {
    console.log('Primer texto:', text)
})

console.log('--> Ejecutando otros procesos mientras lee archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('HelloWorldTwo.txt', 'utf-8')
.then(text => {
    console.log('Segundo texto:', text)
})