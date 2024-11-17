const fs = require('fs');
const readline = require('readline');
const fileName = 'estudiantes.json'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const agregarEstudiante = (student) => {

    fs.readFile(fileName, 'utf8', (err, data) => {
        let students = [];
        if (err) {
            console.log('Archivo no encontrado');
        } else {
            students = JSON.parse(data); 
        }

        students.push(student); 

        fs.writeFile(fileName, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('Estudiante agregado exitosamente.');
            }
            rl.close(); 
        });
    });
};

const pedirDatosEstudiante = () => {
    rl.question('Ingrese el nombre del estudiante: ', (nombre) => {
        rl.question('Ingrese la edad del estudiante: ', (edad) => {
            rl.question('Ingrese la carrera del estudiante: ', (carrera) => {
                const nuevoEstudiante = {
                    nombre,
                    edad: parseInt(edad, 10), 
                    carrera,
                };

                agregarEstudiante(nuevoEstudiante); 
            });
        });
    });
};

pedirDatosEstudiante();