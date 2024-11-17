const fs = require('fs')

const fileName = 'estudiantes.json'
const estudiantes = [
    {nombre: 'Juan', edad:29,carrera:'Ing en desarrollo'},
    {nombre: 'Yahir', edad:16,carrera:'Ing en desarrollo'},
    {nombre: 'ELi', edad:20,carrera:'Ing en desarrollo'},
    {nombre: 'Eithan', edad:17,carrera:'Ing en desarrollo'},
]

fs.writeFile(fileName, JSON.stringify(estudiantes,null, 2),(err)=>{
    if(err){
        console.error('Error al creal el archivo JSON', err);
    return;
    }
    console.log('El archivo fue creado con éxito:')
})