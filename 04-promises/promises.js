/*
    Promise:
    un objeto que representa el resutlado de una ejecución asyn

    constructor
    new Promise()
    Recibe una función como parámetro(callback)
    new Promise((resolve, reject) => {
        if('todo cool!!') resolve('todo excelente!!')
        if('hay un error') reject('paso algo D:')
    })
    */
    
   /*
   resolve(es una función) -> al invocarla se cambiará el estado de la promesa a resolve
   reject(es una función) -> al invocarla se cambiará el estado de la promesa a  rejected
   */

//    const myFirstPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = 'hay un error'
//         if(error){
//             reject('ocurrió un error')
//         } 
//         resolve('todo cool!!')
//     },2000)
//    })

   //console.log(myFirstPromise)

//    myFirstPromise
//    .then((result) => {
//     console.log('result', result)
//    })
//    .catch((error)=>{
//     console.log('error', error)
//    })
   /*
    .then(() => {}) -> Maneja la promesa cuando haya sido exitosa
                        - Recibe un callback
                        - Regresa lo que se pasa en la función resolve()
    .catch(() => {}) -> Maneja la promesa cuando haya sido rechazada
                        - Recibe un callback
                        - Regresa lo que se pasa en la función reject()


    otra forma promise:
    - Wrappeado por una función

        funcion algoAsincrono() {
            regresasr la promesa
        }
   */

    // function algoAsincrono(){
    //     return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             let error = 'sdf'
    //             if(error){
    //                 reject('ocurrió un error')
    //             } 
    //             resolve('todo cool!!')
    //         },2000)
    //        })
    // }

    // algoAsincrono()
    // .then((result) =>{
    //     console.log('result', result)
    // })
    // .catch((error)=>{
    //     console.error('error', error)
    // })

    const cinMakePurchases = {
        name: 'Cin Ruiz',
        atSuperMarket: false,
        paidPantry: false,
        atHome: false
    }

    function goToSuperMarket(personGoToSuperMarket){
        return new Promise((resolve, reject)=>{
            console.log(`${personGoToSuperMarket.name} llendo al supermercado...`)
            setTimeout(() => {
                personGoToSuperMarket.atSuperMarket=true
                if(!personGoToSuperMarket.atSuperMarket){
                    reject(`${personGoToSuperMarket.name} no pudo llegar al supermercado`)
                }
                resolve(personGoToSuperMarket)
            }, 3000) 
        })
    }

    function payingThings(personToPay){
        return new Promise ((resolve, reject)=>{
            console.log(`${personToPay.name} está haciendo fila para pagar...`)
            setTimeout(() => {
                personToPay.paidPantry=false
                if(!personToPay.paidPantry){
                    reject(`${personToPay.name} no pudo pagar la despensa`)
                }
                resolve(personToPay)
            }, 3000) 
        })
    }

    function goToHome(personGoHome){
        return new Promise ((resolve, reject)=>{
            console.log(`${personGoHome.name} llendo a casa...`)
            setTimeout(() => {
                personGoHome.atHome=true
                if(!personGoHome.atHome){
                    reject(`${personGoHome.name} no pudo llegar a casa`)
                }
                resolve(personGoHome)
            }, 3000) 
        })
    }

    // goToSuperMarket(cinMakePurchases)
    // .then((personAtTheSuperMarket)=>{

    //     console.log(`${personAtTheSuperMarket.name} ya está en el supermercado`)
    //     payingThings(personAtTheSuperMarket)

    //     .then((personWithHisThings)=>{
            
    //         console.log(`${personWithHisThings.name} ya pagó su despensa`)
    //         goToHome(personWithHisThings)

    //         .then((personAtHome)=>{
    //             console.log(`${personAtHome.name} ya esta en su casa`)
    //         })

    //         .catch((error)=>{
    //             console.log('Error ', error)
    //         })
    //     })

    //     .catch((error)=>{
    //         console.log('Error ', error)
    //     })
    // })

    // .catch((error)=>{
    //     console.log('Error ', error)
    // })

    //promise hell

    //encadenamiento de promesas
    // goToSuperMarket(cinMakePurchases)
    //   .then((personAtTheSuperMarket) => {
    //     console.log(
    //       `${personAtTheSuperMarket.name} ya está en el supermercado`
    //     );
    //     return payingThings(personAtTheSuperMarket);
    //   })
    //   .then((personWithHisThings) => {
    //     console.log(`${personWithHisThings.name} ya pagó su despensa`);
    //     return goToHome(personWithHisThings);
    //   })
    //   .then((personAtHome) => {
    //     console.log(`${personAtHome.name} ya pagó su despensa`);
    //     console.log(personAtHome);
    //   })
    //   .catch((error)=>{
    //     console.log('Error: ', error)
    //   })

    /*
    
    async / await

    async -> Marcar una función como ASINCRONA
    await -> ESPERAR EL RESULTADO DE UNA PROMESA

    Condiciones:
      - Para usar AWAIT necesitamos una función que marcaremos como asyncrona
      Donde utilizo await necesitamos marcar la función que la contiene como asíncrona

      - Las funciones marcadas como "ASYNC" por defecto regresan como una promesa

    */

    async function main(){
        const personAtSuperMarket = await goToSuperMarket(cinMakePurchases) //regresa una promesa
        console.log(`${personAtSuperMarket.name} ya llegó al supermercado`)

        const personWithHisThings = await payingThings(personAtSuperMarket) //regresa una promesa
        console.log(`${personWithHisThings.name} ya pagó su despensa`)

        const personAtHome = await goToHome(personWithHisThings) //regresa una promesa
        console.log(`${personAtHome.name} ya llegó al supermercado`)
        console.log(personAtHome)
    }

    main()
    .then(() =>{
        console.log('todo cool')
    })
    .catch((error)=> {
        console.log('error ', error)
    })

    /*
    
    Prácticas:
        1. Realizar el proceso de inscripción a kodemia con promesas
            - Encadenamiento de promesas
            - async / await
        2-. Práctica del CRUD de koders con file system con promesas:
            A partir de archivo koders.json
            Realizar las siguientes acciones:

                1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders
                2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
                3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
                4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
                5º Crear una función que permita obtener a los koders que sean mayores a 25 años

                Req callbacks file Sytems
                JSON.parse() -> convierte de cadena a un objeto js
                JSON.stringify() -> convertir de objeto a string

            CON ASYNC Y AWAIT

    */