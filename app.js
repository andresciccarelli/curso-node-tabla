const { basename } = require('path');
const { crearTabla } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
const color = require('colors')

crearTabla(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log('Creado '.inverse, nombreArchivo.rainbow))
    .catch(error => console.log('ERROR AL GRABAR: ', error));