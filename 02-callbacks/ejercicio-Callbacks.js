/*
  Proceso de inscripción a Kodemia 

    1° Recibir información | Entrevista
    2° Enviar la oferta
    3° Inscripción
    4° prebootcamp

    Objetivo: Plasmar en funciones y callbacks dicho proceso

    const incriptionKodemiaHector = {
      name: 'Héctor Barboza',
      isInterviewed: false,
      hasOffer: false,
      isInscript: false,
      canTakeClass: false
    }
*/

const inscriptionKodemiaHector = {
  name: "Héctor Barboza",
  isInterviewed: false,
  hasOffer: false,
  isInscript: false,
  canTakeClass: false,
};

function interviewed(object, callback) {
  setTimeout(() => {
    object.isInterviewed = true;
    callback(null, "YA SE ENTREVISTÓ!");
    console.log(object);
  }, 2000);
}

function offered(object, callback) {
  setTimeout(() => {
    object.hasOffer = true;
    callback(null, "YA SE LE HIZO UNA OFERTA!");
    console.log(object);
  }, 3000);
}

function inscription(object, callback) {
  setTimeout(() => {
    object.isInscript = true;
    callback(null, "YA SE INSCRIBIÓ!");
    console.log(object);
  }, 3000);
}

function classTaken(object, callback) {
  setTimeout(() => {
    object.canTakeClass = true;
    callback(1, "YA ESTÁ TOMANDO CLASES!");
    console.log(object);
  }, 3000);
}

interviewed(inscriptionKodemiaHector, (error, message) => {
  if (error) {
    console.log("No se inscribió :( mira: ", error);
    return;
  }
  console.log(message);

  offered(inscriptionKodemiaHector, (error, message) => {
    if (error) {
      console.log("No se le hizo una oferta :( debido a:  ", error);
      return;
    }
    console.log(message);

    inscription(inscriptionKodemiaHector, (error, message) => {
      if (error) {
        console.log("No se pudo inscribir D: checa porqué: ", error);
        return;
      }
      console.log(message);

      classTaken(inscriptionKodemiaHector, (error, message) => {
        if (error) {
          console.log("No tomó clases D': lo que pasó es que: ", error);
          return;
        }
        console.log(message);
      });
    });
  });
});
