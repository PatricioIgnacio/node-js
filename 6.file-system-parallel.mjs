import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./HelloWorld.txt', 'utf-8'),
    readFile('./HelloWorldTwo.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('Primer texto:', text)
    console.log('Segundo texto:', secondText)
})