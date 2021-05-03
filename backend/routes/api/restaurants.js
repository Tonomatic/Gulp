const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Restaurant, Review, User } = require('../../db/models');
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
    const id = req.params.id;
    const allReviews = await Review.findAll({where: {restaurantId: id}, include: User, order: [['createdAt', 'DESC']]})
    return res.json(allReviews);
}))

router.post('/:id/reviews', requireAuth, asyncHandler(async (req, res) =>{
    let newreview = {
        userId: req.user.id,
        restaurantId: req.params.restaurantId,
        reviewText: req.body.reviewText,
        rating: req.body.rating
    };
    newreview = await Review.create(newreview);
    newreview.dataValues.User = await User.findbyPk(req.user.id);
    return res.json(newreview)
}))




module.exports = router;
