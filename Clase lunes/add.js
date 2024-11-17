const fs = require('fs')

const fileName='estudiantes.json'

fs.readFile(fileName, 'utf8', (err, data)=>{
    if(err){
        console.error('Error al leer el archivo', err);
        return;
    }
    try{
        const estudiantes = JSON.parse(data);
        estudiantes[0].edad= 2000

        fs.writeFile(fileName, JSON.stringify(estudiantes,null,2),(error)=>{
            if(err){
                console.error('Error al modificar el json', err)
                return;
            }
            console.log('El archivo se modificó de forma exitosa')
        })
    }catch(err){
        console.log('Modificacion exitosa');
    }
    
})