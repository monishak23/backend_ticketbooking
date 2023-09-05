const express = require('express');
const router = express.Router();

const movieController = require('../controller/movieController');

// Use the listmovies function for handling movie listing
router.get('/movies', movieController.listmovies);

module.exports = router;
