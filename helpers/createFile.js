
const fs = require('fs');
const { colores } = require('../config/yargs');

const funTabla = (base,l, h) => {
    
    return new Promise((resolve, reject) => {
    
        try{

            let m = '';
            let tablaConsola = '';

            for (let i = 1; i <= h; i++) {

                tablaConsola = `${ base } x ${ i } = ${ base * i}\n`;
                m += tablaConsola;

                if(l){

                    if(i == 1){
                        console.log('==================='.yellow);
                        console.log('='.yellow,'  tabla del '.green, `${base}`.red, ' ='.yellow);
                        console.log('===================\n'.yellow);
                    }

                    console.log(tablaConsola.america);
            
            
                }
            }


            fs.writeFileSync(`./tablas/tabla-del-${ base }.txt`, m);

            console.log(`el archivo "tabla-del-${ base }.txt" fue creado correctamente`.rainbow);
            
        }
        catch(err){
            reject(err)
        }

    })
}


module.exports = {
    CreateFile : funTabla,
}