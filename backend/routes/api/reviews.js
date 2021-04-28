const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Reviews } = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler( async function(req, res ) {
    const reviews = await Restaurant.findAll();
    return res.json(reviews)
}));


module.exports = router;
