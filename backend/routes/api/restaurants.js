const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Restaurant } = require('../../db/models')
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
module.exports = router;
