const fechaActual = new Date()

const mesActual = fechaActual.getMonth();

const nombreMEses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const NombresMes = nombreMEses[mesActual];

console.log(`El mes actual es: ${NombresMes}`);
