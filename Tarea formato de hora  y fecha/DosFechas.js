//Escribe un programa que calcule la diferencia en días entre dos fechas. (Las dos fechas serán las que usted decida trabajar)
const diferencia1 = new Date('2012-8-8');

const diferencia2 = new Date('2024-9-10');

const tiempoTranscurrido = Math.abs(diferencia2 - diferencia1);

const diferenciaDias = tiempoTranscurrido / (1000*60*60*24);

console.log(`La diferencia en días es: ${diferenciaDias} días.`);
