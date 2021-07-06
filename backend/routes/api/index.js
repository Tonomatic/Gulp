const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const restaurantRouter = require('./restaurants.js')
const reviewsRouter = require('./reviews.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/restaurants', restaurantRouter)

router.use('/reviews', reviewsRouter )

module.exports = router;
