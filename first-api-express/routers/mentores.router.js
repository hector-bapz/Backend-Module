import express from 'express'
import fs, { copyFileSync } from 'fs'
/*
Práctica:
Realizar los siguientes endpoints:
    GET /mentors
    GET /mentors/:id
    POST /mentors
    PATCH /mentors/:id
    DELETE /mentors/:id

    Implementar un Router para mentores
*/
const router = express.Router()

router.get('/', async (request, response)=>{
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)

    response.json({
        success: true,
        data:{
            koders: json.mentores 
        }
    })

})

//GET /koders/2
router.get('/:idMentores', async (request, response)=>{
    console.log(request.params)
    const id = parseInt(request.params.idMentores)
    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)

    const mentorFound = json.mentores.find(mentor => mentor.id===id)
    
    if(!mentorFound){
        response.status(404)
        response.json({
            success:false,
            message: 'mentor no encontrado'
        })
        return
    }
    response.json({
        success:true,
        data:{
            mentor:mentorFound
        }
    })
})

//enviar información de un koder para crearlo
router.post('/', async (request, response)=>{

    // paquete http - headers | body
    const newMentor = request.body

    console.log(newMentor)

    const dataFile = await fs.promises.readFile('./kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const mentor = json.mentores
    
    json.mentores.push(newMentor)

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true,
        message:'mentor creado',
        data : {
            mentor: json.mentores
        }
    })
})




router.delete('/:idMentor', async (request, response)=>{
    const dataFile = await fs.promises.readFile('kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const { idMentor } = request.params
    const newMentores = json.mentores.filter(mentor=>mentor.id !== parseInt(idMentor))
    json.mentores = newMentores // reemplazar con los nuevos koders

    await fs.promises.writeFile('kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success:true,
        message:'Mentor eliminado!',
        data: {
            mentores : json.mentores
        }
    })
})


//TAREA PATCH
router.patch('/', async (request, response)=>{
    const dataFile = await fs.promises.readFile('kodemia.json', 'utf8')
    const json = JSON.parse(dataFile)
    const updatedMentor = request.body


    const mentorIndex = json.mentores.findIndex(mentor => mentor.id === updatedMentor.id)
    json.mentores.splice(mentorIndex, 1, updatedMentor)

    await fs.promises.writeFile('./kodemia.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true,
        message:'mentor modificado',
        data: {
            koder: json.mentores
        }
    })


})

export default router