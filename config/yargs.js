const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type : 'number',
            description : 'el numero del cual quieres la tabla',
            demandOption : true
        })
        .option('l', {
            alias : 'listar',
            type : 'boolean',
            description : 'mostrar la tabla en consola',
            default : false,
        })
        .option('h', {
            alias : 'hasta',
            type : 'number',
            description : 'hasta donde quieres multiplicar la base',
            default : 10,
        })
        .check( (argv, options) => {
            if(isNaN(argv.b)){
                throw 'es necesario que el argumento b sea un numero'
            }
            return true
        })
        .argv;

var colors = require('colors');

module.exports = {
    argv : argv,
    colores : colors,
}