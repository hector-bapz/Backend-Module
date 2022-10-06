import {Koder} from '../models/koders.models.js'
import express from 'express'

const router = express.Router()

router.get('/', async (request, response)=>{
    const allKoders = await Koder.find({})
    response.json({
        success: true,
        data: {
            koders: allKoders
        }
    })
})

/*
Endpoints:
    
    
    
    POST /koders
     agregar un router de koders
     Investigar: 
        - middlewares en express
        
*/

// GET /koders/:id
router.get('/:idKoders', async (request, response) =>{
    const idKoders = request.params.idKoders
    let koderFound, success, status
    try{
        koderFound = await Koder.findById(idKoders) 
    } catch{ 
        success = false
    }

    if(!koderFound){
        status = 404
        koderFound = 'Koder Not Found'
    } else{
        status = 200
        success = true
    }

    response.status(status)
    response.json({
        success: success,
        koder : koderFound
    })
})

//PATCH /koders/:id
router.patch('/:idKoder/:name',async (request, response)=>{
    const idKoder = request.params.idKoder
    const name = request.params.name
    let updatedKoder, success, status
    const newData = {
        name: name
    }   
    try{
        updatedKoder = await Koder.findByIdAndUpdate(idKoder,newData, {new: true})
    } catch {
        success = false
    }

    if(!updatedKoder){
        status = 404
        updatedKoder = 'The koder that you are trying to update does not exist'
    } else{
        status = 200
        success = true
    }

    response.status(status)
    response.json({
        success: success,
        koder : updatedKoder
    })
})

//DELETE /koders/:id
router.delete('/:idKoders', async (request, response) =>{
    const idKoders = request.params.idKoders
    let koderFound, success, status, message
    try{
        koderFound = await Koder.findByIdAndDelete(idKoders) 
    } catch{ 
        success = false
    }

    if(!koderFound){
        status = 404
        koderFound = false
        message = `the Koder ${idKoders} does not exist`
    } else{
        status = 200
        success = true
        message = `the Koder ${idKoders} was deleted succefully`
    }

    response.status(status)
    response.json({
        success: success,
        message : message,
        koder : koderFound
    })
})

// POST /koders
router.post('/', async (request, response) =>{
    const newKoder = request.body
    let koderCreated, success, status, message
    try{
        koderCreated = await Koder.create(newKoder) 
    } catch{ 
        success = false
    }

    if(!koderCreated){
        status = 404
        koderCreated = 'Koder Not Found'
        message = 'There is an error'
    } else{
        status = 200
        success = true
        message = 'the Koder was created succefully'
    }

    response.status(status)
    response.json({
        success: success,
        message: message,
        koder : koderCreated
    })
})


export default router