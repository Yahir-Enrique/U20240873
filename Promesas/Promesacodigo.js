function verificarCodigoDescuento(codigo) {
    return new Promise((resolve, reject) => {
      if (codigo === "DESCUENTO2024") {
        resolve("código de descuento válido");
      } else {
        reject("código inválido");
      }
    });
  }

  verificarCodigoDescuento("DESCUENTO2024")
  .then((mensaje) => console.log(mensaje)) // "código de descuento válido"
  .catch((error) => console.log(error));   // Si el código es inválido