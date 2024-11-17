const fs = require('fs')

const fileName = 'estudiantes.json'
fs.readFile(fileName, 'utf8', (err,data)=>{
    if(err){
        console.log('Error al leer el archivo')
        return;

    }

    //convertir una cadena JSON

    const estudiantes = JSON.parse(data)
    const nuevoEstudiante ={nombre: 'Carlos', edad:21, carrera:'ING desarrollo software'}
    estudiantes.push(nuevoEstudiante);

    fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(err)=>{
        if(err){
            console.error('Error al escribir en el archivo JSON', err);
        }
        console.log('Nuevo dato agregado con éxito al archivo JSON.')
    });
});