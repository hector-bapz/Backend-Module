import express from 'express';
import { StatusHTTP } from "../errorCustom.js";

const router = express.Router();

function middlewareRouter(request,response,next){
    console.log('middlewareRouter')
    next()
}

router.use(middlewareRouter)

function endpointMiddleware(request,response,next) {
    console.log('Endpoint GET/koders middleware router')
    next()
}

router.get('/', endpointMiddleware ,(request, response) => {
    try {
        response.json({
            message: 'Koders get'
        })
    } catch(error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

router.post('/', (request, response) => {
    try {
        response.json({
            message: 'koders post'
        })
    } catch(error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

export default router