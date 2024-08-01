const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa una frase: ', phrase => {
    const capitalizedPhrase = phrase
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log('Frase capitalizada:', capitalizedPhrase);
    readline.close();
});