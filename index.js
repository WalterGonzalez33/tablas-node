
const {CreateFile} = require('./helpers/createFile');
const { argv } = require('./config/yargs');

console.clear();

let listar = argv.l;
let base = argv.b;
let hasta = argv.h;



CreateFile(base, listar, hasta)
    .then(res => console.log(res))
    .catch(err => console.log(err))