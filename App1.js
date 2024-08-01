let readline = require ('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question("ingrese su nombre ", (nombre) => {
    console.log(`your name is : , ${nombre}` );
    rl.close()
})