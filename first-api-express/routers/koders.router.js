import express from 'express'
import fs, { copyFileSync } from 'fs'

const router = express.Router() //creando un router


/*
Ejercicio:
    - GET / koders -> Response json : {message: 'Aqui estarán todos los koders'}
    - POST / koders -> Response json : {message: 'Aqui se crearán koders'}
    - PATCH / koders -> Response json : {message: 'Aqui se actualizarán koders'}
    - DELETE / koders -> Response json : {message: 'Aqui se eliminarán koders'}

*/

/*
    Endpoint -> punto final de información
    conjunto de un método y una ruta

    por ejemplo: 
    GET /koders
    POST /koders
*/

// regresar a todos los koders
// server.get('/koders', async (request, response)=>{
//     const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
//     const json = JSON.parse(dataFile)
//     const koders = json.koders

//     // si quisieramos regresar solo los nombres de los kdoers:
//     // const kodersName = koders.map(koder => ({koder.name}))
//     response.json({
//         success: true,
//         data:{
//             koders
//         }
//     })
// })


// router.get('/', async (request, response)=>{
//     const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
//     const json = JSON.parse(dataFile)

//     const {generation, gender} = request.query
//     console.log('generation: ', generation)
//     let kodersFiltered = json.koders
//     //Validar si viene el query
//     //string -> true
//     //undefined -> false
//     if(generation){
//         kodersFiltered = kodersFiltered.filter(koder => koder.generation===parseInt(generation))
//     }

//     if(gender){

//         kodersFiltered = kodersFiltered.filter(koder => koder.gender===gender)
//     }

//     response.json({
//         success: true,
//         data:{
//             koders: kodersFiltered || json.koders
//         }
//     })

// })

//enviar información de un koder para crearlo
router.post('/', async (request, response)=>{

    // paquete http - headers | body
    const newKoder = request.body

    console.log(newKoder)

    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const koders = json.koders
    
    json.koders.push(newKoder)

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true,
        message:'koder creado'
    })
})

//GET /koders/2
router.get('/:idKoders', async (request, response)=>{
    console.log(request.params)
    const id = parseInt(request.params.idKoders)
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)

    const koderFound = json.koders.find(koder => koder.id===id)
    
    if(!koderFound){
        response.status(404)
        response.json({
            success:false,
            message: 'koder no encontrado'
        })
        return
    }
    response.json({
        success:true,
        data:{
            koder:koderFound
        }
    })
})

//GET COUNT 2
router.get('/', async (request, response)=>{
    const {count} = request.query
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)

    const koderCount = json.koders.slice(0,count)
    console.log(count)

    response.json({
        success:true,
        data:{
            koder:koderCount
        }
    })
})

router.delete('/:idKoder', async (request, response)=>{
    const dataFile = await fs.promises.readFile('kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const { idKoder } = request.params
    const newKoders = json.koders.filter(koder=>koder.id !== parseInt(idKoder))
    json.koders = newKoders // reemplazar con los nuevos koders

    await fs.promises.writeFile('kodemia.json', JSON.stringify(json, null, 2), 'utf8')


    response.json({
        success:true,
        message:'Koder eliminado!'
    })
})


//TAREA PATCH
router.patch('/', async (request, response)=>{
    const dataFile = await fs.promises.readFile('kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const updatedKoder = request.body


    const koderIndex = json.koders.findIndex(koder => koder.id === updatedKoder.id)
    json.koders.splice(koderIndex, 1, updatedKoder)

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true,
        message:'koder modificado',
        data: {
            koder: json
        }
    })


})

export default router