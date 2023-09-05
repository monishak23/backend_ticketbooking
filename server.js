const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const AuthRoute = require('./routes/auth')
const MoviesRoute = require('./routes/movie')
const BookingRoute = require('./routes/booking')


mongoose.connect('mongodb://localhost:27017/Ticketbooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})

db.once('open', () => {
  console.log('Database connection established')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 5000


// Define the secure route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/api', AuthRoute)
app.use('/api', MoviesRoute)
app.use('/api', BookingRoute)
