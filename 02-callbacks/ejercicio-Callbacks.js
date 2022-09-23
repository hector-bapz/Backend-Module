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
    callback(null, object);
  }, 2000);
}

function offered(callback, object) {
  setTimeout(() => {
    callback(null, object);
  }, 3000);
}

function inscription(callback, object) {
  setTimeout(() => {
    callback(null, object);
  }, 3000);
}

function classTaken(callback, object) {
  setTimeout(() => {
    callback(null, object);
  }, 3000);
}

interviewed((error, object) => {
  if (error) {
    console.log("hay un error: ", error);
    return;
  }
  object.isInterviewed = true;
  console.log("YA SE ENTREVISTÓ!");
  console.log(object);

  offered((error, object) => {
    if (error) {
      console.log("hay un error: ", error);
      return;
    }
    object.hasOffer = true;
    console.log("YA SE LE HIZO UNA OFERTA!");
    console.log(object);

    inscription((error, object) => {
      if (error) {
        console.log("hay un error: ", error);
        return;
      }
      object.isInscript = true;
      console.log("YA SE INSCRIBIÓ!");
      console.log(object);

      classTaken((error, object) => {
        if (error) {
          console.log("hay un error: ", error);
          return;
        }
        object.canTakeClass = true;
        console.log("YA ESTÁ TOMANDO CLASES!");
        console.log(object);
      }, object);
    }, object);
  }, object);
}, inscriptionKodemiaHector);
