function isPalindrome(word) {
    
    const cleanedWord = word.toLowerCase().replace(/\s+/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa una palabra: ', word => {
    if (isPalindrome(word)) {
        console.log('La palabra es un palíndromo.');
    } else {
        console.log('La palabra no es un palíndromo.');
    }
    readline.close();
});
