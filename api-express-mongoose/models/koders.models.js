import mongoose from 'mongoose'

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

export {Koder}