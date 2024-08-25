//Crea un programa en JavaScript que utilice el objeto Date para obtener el día de la semana actual y lo muestre en la consola en un formato corto de tres letras
let fechaActual = new Date();

let diaActual = fechaActual.getDay()

let nombresDias = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let nombreDia = nombresDias[diaActual];

console.log(`El día es: ${nombreDia}`);