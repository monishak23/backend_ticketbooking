const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
 moviename:{
        type:String
    },
    theatrename:{
        type:String
    },
    theatrelocation:{
        type:String
    },
    releasedate:{
        type:Date
    }
})

const Movie=mongoose.model('Movie',MovieSchema,'movielist')
module.exports = Movie
