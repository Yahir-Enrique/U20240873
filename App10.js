const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa una palabra: ', word => {
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;
    console.log('Número de vocales:', vowelCount);
    readline.close();
});