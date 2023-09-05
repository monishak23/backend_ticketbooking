const express = require('express')
const router = express.Router()

const BookingController = require('../controller/bookingController')

router.post('/book',BookingController.book)

module.exports = router