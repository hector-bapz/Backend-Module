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

function interviewed(callback, object) {
  setTimeout(() => {
    object.isInterviewed = true;
    callback(null, "YA SE ENTREVISTÓ!");
    console.log(object);
  }, 2000);
}

function offered(callback, object) {
  setTimeout(() => {
    object.hasOffer = true;
    callback(null, "YA SE LE HIZO UNA OFERTA!");
    console.log(object);
  }, 3000);
}

function inscription(callback, object) {
  setTimeout(() => {
    object.isInscript = true;
    callback(null, "YA SE INSCRIBIÓ!");
    console.log(object);
  }, 3000);
}

function classTaken(callback, object) {
  setTimeout(() => {
    object.canTakeClass = true;
    callback(null, "YA ESTÁ TOMANDO CLASES!");
    console.log(object);
  }, 3000);
}

interviewed((error, message) => {
  if (error) {
    console.log("hay un error: ", error);
    return;
  }
  console.log(message);

  offered((error, message) => {
    if (error) {
      console.log("hay un error: ", error);
      return;
    }
    console.log(message);

    inscription((error, message) => {
      if (error) {
        console.log("hay un error: ", error);
        return;
      }
      console.log(message);

      classTaken((error, message) => {
        if (error) {
          console.log("hay un error: ", error);
          return;
        }
        console.log(message);
      }, inscriptionKodemiaHector);
    }, inscriptionKodemiaHector);
  }, inscriptionKodemiaHector);
}, inscriptionKodemiaHector);
