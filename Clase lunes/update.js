const fs = require('fs')

const fileName = 'estudiantes.json'
fs.readFile(fileName, 'utf-8', (err, data)=>{
    if(err){
        console.error('Error al leer el JSON;', err);
        return;
    }

    const estudiantes = JSON.parse(data);
    estudiantes[0].edad= 1000;

    fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(error)=>{
        if(error){
            console.error('Error al modificar el json', error);
            return;
        }
        console.log('Modificación exitosa');
    });
});