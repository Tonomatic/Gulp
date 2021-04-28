const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Restaurant } = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler( async function(req, res ) {
    const restaurants = await Restaurant.findAll();
    return res.json(restaurants)
}));


module.exports = router;
