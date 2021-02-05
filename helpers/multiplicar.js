const fs = require('fs');
const color = require('colors')


const crearTabla = async(base = 5, listar, hasta) => {
    try {
        let datos = '';
        let datos_archivo = '';
        let cabecera = (`==================================\n Tabla del ${base} \n =================================\n`);
        datos = '';
        for (let step = 1; step <= hasta; step++) {
            datos_archivo += `${base}  x  ${step}  =  ${base * step} \n`;
            datos += (base.toString()).bgBlue + 'x'.yellow + step.toString().blue + '= ' + ((base * step).toString()).green + `\n`;
        }
        fs.writeFileSync(`./salida/tabla_del_${base}.txt`, cabecera + datos_archivo);
        if (listar) console.log(datos);
        return (`tabla_del_${base}.txt`)
    } catch (error) {
        throw error;

    }

}



module.exports = {
    crearTabla
}