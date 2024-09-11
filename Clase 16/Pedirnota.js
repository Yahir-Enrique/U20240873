const readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

rl.question('Ingresa tu nota (0-100):', (nota)=>{
    nota = parseFloat(nota)
    let letra
    if(nota >=90){
        letra = 'A'
    }else if(nota>=80){
        letra = 'B'
    }else if(nota>=70){
        letra = 'C'
    }else if(nota>=60){
        letra = 'D'
    }else{
        letra = 'F'
    }
    console.log(`Tu nota es: ${letra}`)
    rl.close()
})