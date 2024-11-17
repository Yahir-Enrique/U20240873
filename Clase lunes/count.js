const fs = require('fs')

const fileName = 'estudiantes.json'

fs.readFile(fileName, 'utf-8', (err, data)=>{
    if(err){
        console.error('error al leer el archivo:', err);
        return;
    }

    const estudiantes = JSON.parse(data);
    console.log(`Número total de estudiantes:${estudiantes.length}`);
});