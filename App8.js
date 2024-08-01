function reverseString(str) {
    return str.split('').reverse().join('');
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa una cadena: ', str => {
    const reversedStr = reverseString(str);
    console.log('Cadena invertida:', reversedStr);
    readline.close();
});