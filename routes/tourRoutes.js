const express = require('express')
const tourController = require('../controllers/tourController')

const router = express.Router()

// param middleware
router.param('id', tourController.checkID)

// Create a checkBody middleware
// Check if body contains the name and price property
// If not send 400 status code error
// Add it to the post handler stack

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour)

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router