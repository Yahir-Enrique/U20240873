function extractSubstring(inputString, startIndex, length) {

    if (isNaN(startIndex) || isNaN(length) || startIndex < 0 || length < 0) {
        console.log('Por favor, ingresa números válidos para el índice y la longitud.');
        return;
    }

    const substring = inputString.substr(startIndex, length);
    console.log('Subcadena extraída:', substring);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa una cadena: ', inputString => {
    readline.question('Índice inicial: ', startIndex => {
        readline.question('Longitud de la subcadena: ', length => {
            extractSubstring(inputString, parseInt(startIndex), parseInt(length));
            readline.close();
        });
    });
});