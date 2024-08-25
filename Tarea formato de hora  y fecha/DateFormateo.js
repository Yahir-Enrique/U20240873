// Crea un objeto Date para la fecha : Feb 20, 2012, 3:12 am. Deberá formatear la hora para que muestre la que aquí se le indica
const fecha = new Date('Feb 20, 2012, 3:12 am.');

const opciones = {year:'numeric', month:'short', day:'numeric', hour:'numeric', minute:'numeric', hour12: true};

const formateoHora = fecha.toLocaleString('es-SV', opciones)

console.log(`Hora formateada: ${formateoHora}`);
