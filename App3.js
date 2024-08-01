let readline = require ('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question('Ingresa un mensaje', (mensaje) => {
    const numCaracteres=mensaje.length
    console.log (`El número de caracteres del mesaje es: ${numCaracteres}`)
    process.exit()

})