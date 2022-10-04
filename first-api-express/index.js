// Si no esta agregado la propiedad:  "type" : "module" en el package.json se utiliza require
//require()

// import ___ from ''; modules
//"type": "module" (en el package.json)// importar module -> import from // export default

import express from 'express'
import kodersRouter from './routers/koders.router.js'

//express es un framework (conjunto de componentes que ya nos brinda muchas cosas) que se utiliza para generar apis de forma rapida
// nos permite crear aplicaciones de servidor (server side app) 
// nos ofrece facilidad de brindar servicios api rest y crear servidores

const server = express() //creando nuestro servidor

//middleware - convertir lo que llega en body a un json
server.use(express.json())

//routers
server.use('/koders', kodersRouter)


//poner a escuchar nuestro server

server.listen(8080,()=>{
    console.log('Server listening on port 8080')
})

