const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookingSchema = new Schema({
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
       },
       seats:{
        type: [String]
       },
       showtiming:{
        type:Date
       }
   })

const Booking=mongoose.model('Booking',BookingSchema,'booking')
module.exports = Booking