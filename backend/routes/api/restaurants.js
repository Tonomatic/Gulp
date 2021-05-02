const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Restaurant, Reviews } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

router.get('/', asyncHandler( async function(req, res ) {
    const restaurants = await Restaurant.findAll();
    return res.json(restaurants)
}));


router.get('/:id', asyncHandler( async function(req, res) {
    const id = req.params.id;
    let restaurant = await Restaurant.findByPk(id);
    return res.json(restaurant);
}))

router.get('/:id/reviews', asyncHandler(async(req, res) => {
    const reviewId = req.params.reviewId;
    const allReviews = await Reviews.findAll({where: {reviewId}, order: [['createdAt', 'DESC']]})
    return res.json(allReviews);
}))




module.exports = router;
