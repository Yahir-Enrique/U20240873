const fs = require('fs')

const fileName= 'estudiantes.json'

fs.readFile(fileName, 'utf8', (err, data)=>{
    if(err){
        console.error('Error al tratar de leer el archivo', (err));
        return;
    }
    const estudiantes = JSON.parse(data);
    console.log('Contenido del archivo JSON',estudiantes);
});