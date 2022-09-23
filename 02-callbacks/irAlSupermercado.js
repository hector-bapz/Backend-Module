/*
    Acciones:
    1° Ir al supermercado - 5000ms
    2° Pagar la despensa - 3000ms
    3° Llegar a casa - 4000 ms

    callback
*/

function goToSuperMarket(callback) {
  console.log("Llendo al supermercado");
  setTimeout(() => {
    callback(null, "Hola, ya llegué al supermercado");
  }, 5000);
}

function payThings(callback) {
  console.log("Haciendo fila para pagar...");
  setTimeout(() => {
    callback("se me olvido el monedero", null);
  }, 3000);
}

function arriveHome(callback) {
  console.log("llendo a casa...");
  setTimeout(() => {
    callback(null, "Hola, ya estoy en casa :D");
  }, 2000);
}

goToSuperMarket((error, message) => {
  if (error) {
    console.log("Ah ocurrido algo: ", error);
    return;
  }
  console.log(message);

  payThings((error, message) => {
    if (error) {
      console.log("Ah ocurrido algo: ", error);
      return;
    }
    console.log(message);

    arriveHome((errorArriveHome, messageHome) => {
      if (errorArriveHome) {
        console.log("Ah ocurrido algo: ", error);
        return;
      }
      console.log(messageHome);
    });
  });
});
//callback Hell
