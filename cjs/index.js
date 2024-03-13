// console.log(window) -> No existe el objeto global 'window' en Node.js
// globalThis es una variable global en toda nuestra aplicación
// console.log es una propiedad de la variable globalThis

console.log(globalThis) 

globalThis.console.log('Texto')

// En Node.js se utilizará un patron de diseño denominado Módulo, el cual nos permite importar, exportar y reutilizar código de mejor manera

//CommonJS Require Module
const { sum } = require('./sum')
console.log(sum(1,2))