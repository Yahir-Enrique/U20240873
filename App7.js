function countWords(phrase) {
     const words = phrase.trim().split(/\s+/);
    return words.length;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa una frase: ', phrase => {
    const wordCount = countWords(phrase);
    console.log('Número de palabras:', wordCount);
    readline.close();
});