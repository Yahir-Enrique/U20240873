function contarL(palabra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        contador++;
    }
    return contador;
}

console.log(contarL("Brawl stars"));
