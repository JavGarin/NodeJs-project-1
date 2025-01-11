//require('./functions')
//require('./objects')

//console.log(functions.gentitle())
//console.log(functions.getAuthor('Javier Garin'))

import {genTitle, getAuthor} from './functions.js'
import {curso} from './objects.js'

//const { genTitle, getAuthor } = require('./functions')
//const { curso } = require('./objects')

const {nombre, autor} = curso

console.log(genTitle())
console.log(getAuthor('Javier Garin'))
console.log(nombre)
console.log(autor)