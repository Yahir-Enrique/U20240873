const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const menu = `
Seleccione una opción:
1. Crear archivo JSON con estudiantes
2. Leer archivo JSON de estudiantes
3. Agregar nuevo estudiante
4. Actualizar información de estudiantes
5. Eliminar un estudiante
6. Contar estudiantes
7. Salir
`;

const ejecutarOpcion = (opcion) => {
    switch (opcion) {
        case '1':
            exec('node create.js', manejarResultado);
            break;
        case '2':
            exec('node read.js', manejarResultado);
            break;
        case '3':
            exec('node add.js', manejarResultado);
            break;
        case '4':
            exec('node update.js', manejarResultado);
            break;
        case '5':
            exec('node delete.js', manejarResultado);
            break;
        case '6':
            exec('node count.js', manejarResultado);
            break;
        case '7':
            console.log('Saliendo del programa...');
            rl.close();
            return;
        default:
            console.log('Opción inválida. Por favor, intente nuevamente.');
            mostrarMenu();
            return;
    }
};

// Función para manejar el resultado de los scripts
const manejarResultado = (error, stdout, stderr) => {
    if (error) {
        console.error(`Error ejecutando el script: ${error.message}`);
    } else if (stderr) {
        console.error(`Error del script: ${stderr}`);
    } else {
        console.log(stdout);
    }
    mostrarMenu(); 
};


const mostrarMenu = () => {
    console.log(menu);
    rl.question('Ingrese una opción: ', (opcion) => {
        ejecutarOpcion(opcion);
    });
};

mostrarMenu();
