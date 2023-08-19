const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base, listar, hasta) => {
    try {
        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if(listar) {
            console.log('===================='.rainbow.bgBlack)
            console.log(`Tabla del ${base}`);
            console.log('===================='.rainbow.bgBlack);
            console.log(salida.rainbow);
        }
        return `tabla-${base}.txt`.bgWhite;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}
