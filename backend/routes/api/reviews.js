const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Reviews } = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler( async function(req, res ) {
    const { userId } = req.body;
    const reviews = await Restaurant.findAll({
        where: { userId }
    });
    return res.json(reviews)
}));

router.post('/userId(\\d+)', asyncHandler(async (req, res) =>{
    const { userId } = req.params;
    const { restaurantId } = req.body;
    const review = await Review.create({ userId, restaurantId });
    return res.json({succes: "sucess"})
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    await ticket.destroy();
    return res.json({succes: "sucess"})

}))

module.exports = router;
