let readline = require ('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que desea reemplazar: ', (palabraAReemplazar) => {
        rl.question('Ingrese la nueva palabra: ', (nuevaPalabra) => {
            let nuevaFrase = frase.replace(new RegExp(palabraAReemplazar, 'g'), nuevaPalabra);

            console.log('La nueva frase es: ' + nuevaFrase);
            rl.close();
        });
    });
});