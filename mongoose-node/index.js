import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
// const DB_USER = 'hector'
// const DB_PASSWORD = 'hector.bprz'
// const DB_NAME = 'kodemia'
// const DB_HOST = 'testdb.comnldi.mongodb.net'

// console.log('DB_USER', process.env.DB_USER)
// console.log('DB_PASSWORD', process.env.DB_PASSWORD)
// console.log('DB_NAME', process.env.DB_NAME)
// console.log('DB_HOST', process.env.DB_HOST)

// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_NAME = process.env.DB_NAME
// const DB_HOST = process.env.DB_HOST

const{DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

/*

Modelo (termino de mongoose)
    Es una interfaz para comunicarnos con la BD
        - Crear
        - Actualizar
        - Editar
        - Consultar

para crear un modelo necesitamos un Schema

Schema: 
    Nos permitirá definir la estructura de los documentos
    - que campos (name, lastname, age, ...)
    - validaciones (requerido)
    - restricciones
*/

//Schema de koders

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 3,
        max: 100,
    },
    gender: {
        type: String,
        required: true,
        enum:['h', 'm'] // que valores son validos para ese campo
    },
    isGraduated: {
        type: Boolean,
        default: false
    }
})

//Crear el modelo
//              nombre de la colección a la que hacemos referencia, schema
const Koder = mongoose.model('koders', koderSchema )

mongoose.connect(URL) //regresa una promesa
    .then(async (connection)=>{
        console.log('Database connected')

        // const allKoders = await Koder.find({})
        // console.log(allKoders)

        //crear a un koder
        // const newKoder = {
        //     name: 'Rodri',
        //     lastName: 'Montoya',
        //     age: 22,
        //     gender: 'h'
        // }

        // const koderCreated = await Koder.create(newKoder)
        // console.log(koderCreated)

        //Actualizar a un koder
        // const newData = {
        //     name: 'Cinthia'
        // }
        // const koderUpdated = await Koder.findByIdAndUpdate('633ceea09878ed8584cf06dd', newData, {new:true})
        // console.log('Koder updated')
        // console.log(koderUpdated)

        // const koderDeleted = await Koder.findByIdAndDelete('633ceea09878ed8584cf06dd')
        // console.log(koderDeleted)
    })
    .catch((error)=>{
        console.error('Error: ', error)
    })
