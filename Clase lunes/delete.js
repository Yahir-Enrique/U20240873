const fs = require('fs')

const fileName = 'estudiantes.json'

fs.readFile(fileName, 'utf-8', (err, data)=>{
    if(err){
    console.error('Error al leer JSON:', err)
    return;
    }

    const estudiantes = JSON.parse(data);
    const posicionEliminar = 0;

    if(posicionEliminar >=0 && posicionEliminar < estudiantes.length){
        estudiantes.splice(posicionEliminar, 1)

        fs.writeFile(fileName,JSON.stringify(estudiantes, null, 2), (error)=>{
            if(error){
                console.error('error al escribir', error);
                return;
            }
            console.log('Estudiante eliminado correctamente');
        });
    }else{
        console.log('la posición proporcionada es invalida')
    }
});