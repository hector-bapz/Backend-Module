import express from "express";
import kodersRouter from './routers/koders.router.js';
import { StatusHTTP } from "../api-express-mongoose/errorCustom.js";


const server = express();



//middlewares application level
//server.use(middleware)
server.use(express.json())


function validOrange (request,response,next) {
    console.log('This is an application level middleware');
    // request.orange = 'Here we have all the oranges'
    // request.orange = 'Bad oranges :('
    request.isGoodOrange = true;
    if(request.isGoodOrange){
        request.orange = 'Gucci Orange :D '
        next();
        return
    }
    response.status(400).json({
        messae: 'Spicy oranges :((('
    })
}

server.use(validOrange)

server.use((request,response,next)=>{
    console.log('This is another middleware');
    next();
})

//Routers

server.use('/koders', kodersRouter)

server.get('/', (request, response) => {
    try {
        console.log('From GET /',request.orange)
        response.json({
            message: 'Middleware get'
        })
    } catch(error) {
        response.status(400).json({
            success: false,
            message: error.message
        })
    }
})

server.get('/hola', (request, response, next) => {
    try {
        throw new StatusHTTP('Oh no D:', 500)
        response.json({
            message: 'Holis'
        })
    } catch(error) {
        next(error)
    }
})

function handleErrors(error, request, response, next){
    response.status(error.status).json({
        success: false,
        message: 'Server error: ' + error.message
    })
}

server.use(handleErrors)

server.listen(8080, () => {
    console.log('listening on port 8080');
})