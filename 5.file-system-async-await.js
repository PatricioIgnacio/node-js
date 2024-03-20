// IIFE - Inmediatly Invoked Function Expression

const { readFile } = require('node:fs/promises')

async function init () {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./HelloWorld.txt', 'utf-8')
    console.log('Primer texto:', text)
    
    console.log('--> Ejecutando otros procesos mientras lee archivo...')
    
    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./HelloWorldTwo.txt', 'utf-8')
    console.log('Segundo texto:', secondText)
}

init()

/* ECMAScript Modules
import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo...')
const text = await readFile('./HelloWorld.txt', 'utf-8')
console.log('Primer texto:', text)

console.log('--> Ejecutando otros procesos mientras lee archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = await readFile('./HelloWorldTwo.txt', 'utf-8')
console.log('Segundo texto:', secondText)
*/
