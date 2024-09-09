function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Edad apta para acceder al contenido");
        } else {
            reject("Edad no apta para acceder al contenido");
        }
    });
}

validarEdad(17)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

validarEdad(18)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

    validarEdad(19)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));