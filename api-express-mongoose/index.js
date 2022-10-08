import mongoose from 'mongoose'
import express from 'express'
import * as dotenv from 'dotenv'
import kodersRouter from './routers/koders.router.js'


dotenv.config() //cargar todas las variables de entorno

const{DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const server = express()

//middleware 
server.use(express.json())//para usar JSON

//Routers
server.use('/koders', kodersRouter)

//conectar a la base de datos
mongoose.connect(URL)
    .then((connection)=>{ 
        console.log('Database connected')

        // iniciar el server - poner a escuchar SOLO CUANDO EXISTA LA CONEXIÓN A LA BASE DE DATOS
        server.listen(8080, ()=>{
        console.log('Server listening on port 8080')
    })
})
    .catch((error)=>console.error('Error: ', error))


