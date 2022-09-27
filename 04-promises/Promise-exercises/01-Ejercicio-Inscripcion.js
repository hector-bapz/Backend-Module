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
  
  function interviewed(object) {
    return new Promise ((resolve, reject) =>{
      setTimeout(() => {
        object.isInterviewed = true;
        if(!object.isInterviewed){
          reject(`${object.name} no logró entrevistarse`)
      }
        resolve(object);
      }, 3000);
    }) 
  }
  
  function offered(object) {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        object.hasOffer = true;
        if(!object.hasOffer){
          reject(`${object.name} no se llegó a un acuerdo :(`)
      }
        resolve(object);
      }, 3000);
    })
  }
  
  function inscription(object) {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        object.isInscript = false;
        if(!object.isInscript){
          reject(`${object.name} siempre no se inscribió :'(`)
      }
        resolve(object);
      }, 3000);
    })
  }

  function classTaken(object) {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        object.canTakeClass = true;
        if(!object.canTakeClass){
          reject(`${object.name} no tomará sus clases :/`)
      }
        resolve(object);
      }, 3000);
    })
  }
  
  //ENCADENAMIENTO DE PROMESAS

  // interviewed(inscriptionKodemiaHector)
  // .then((newKoder)=>{
  //   console.log(`¡Se ha entrevistado a ${newKoder.name}!`)
  //   console.log(newKoder)
  //   return offered(newKoder)
  // })
  // .then((interviewedKoder)=>{
  //   console.log(`¡Hemos acordado una oferta con ${interviewedKoder.name}!`)
  //   console.log(interviewedKoder)
  //   return inscription(interviewedKoder)
  // })
  // .then((koderWithOffer)=>{
  //   console.log(`¡${koderWithOffer.name} se pudo inscribir!`)
  //   console.log(koderWithOffer)
  //   return classTaken(koderWithOffer)
  // })
  // .then((freshmanKoder)=>{
  //   console.log(`¡${freshmanKoder.name} ya puede tomar sus clases!`)
  //   console.log(freshmanKoder)
  // })
  // .catch((error)=>{
  //   console.log('¡Oh oh! tuvimos un problema: ', error)
  // })

  //ASYNC / AWAIT

  async function inscripcionKoder(){
    const interviewedKoder = await interviewed(inscriptionKodemiaHector)
    console.log(`¡Se ha entrevistado a ${interviewedKoder.name}!`)
    console.log(interviewedKoder)

    const koderWithOffer = await offered(interviewedKoder)
    console.log(`¡Hemos acordado una oferta con ${koderWithOffer.name}!`)
    console.log(koderWithOffer)

    const koderInKodemia = await inscription(koderWithOffer)
    console.log(`¡${koderInKodemia.name} se pudo inscribir!`)
    console.log(koderInKodemia)

    const freshmanKoder = await classTaken(koderInKodemia)
    console.log(`¡${freshmanKoder.name} ya puede tomar sus clases!`)
    console.log(freshmanKoder)
  }

  inscripcionKoder()
  .catch((error)=>{
    console.log('¡Oh oh! tuvimos un problema: ', error)
  })