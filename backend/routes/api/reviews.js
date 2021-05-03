const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { Review, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

// router.get('/', asyncHandler( async function(req, res ) {
//     const { userId } = req.body;
//     const reviews = await Reviews.findAll({
//         where: { userId }
//     });
//     return res.json(reviews)
// }));

// router.get('/:id', asyncHandler( async function(req, res ) {
//     const { id } = req.body;
//     const reviews = await Reviews.findAll({
//         where: { userId }
//     });
//     return res.json(reviews)
// }));

router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId
    let review = await Review.findByPk(reviewId, {include: User});
    if(review.userId === req.user.id) {
        review.text = req.body.text;
        review.rating = req.body.rating;
        await review.save();
        return res.json(review);
    }
}))

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    await review.destroy();
    return res.json({succes: "sucess"})

}))

module.exports = router;
