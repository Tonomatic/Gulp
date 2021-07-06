'use strict';
const faker = require('faker');
const review = require('../models/review');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let usedPairs = {}
    let reviews = []

    for (let i = 0; i < 20; i++) {
      let randUserId = Math.floor(Math.random() * 20) + 1
      let randRestId = Math.floor(Math.random() * 5) + 1
      if (!usedPairs[randUserId]) {
        usedPairs[randUserId] = [randRestId]
        reviews.push({
          reviewText: faker.lorem.paragraph(),
          reviewPhotos: faker.image.food(),
          rating: Math.floor(Math.random() * 5) + 1,
          userId: randUserId,
          restaurantId: randRestId
        })
      } else {
        while (usedPairs[randUserId].includes(randRestId)) {
          randRestId = Math.floor(Math.random() * 6)
        }
        reviews.push({
          reviewText: faker.lorem.paragraph(),
          reviewPhotos: faker.image.food(),
          rating: Math.floor(Math.random() * 5) + 1,
          userId: randUserId,
          restaurantId: randRestId,
        })
        usedPairs[randUserId].push(randRestId)
      }
    }

    return queryInterface.bulkInsert(
      'Reviews',
      reviews,
      {}
    );

    // return queryInterface.bulkInsert(
    //   'Reviews', [
    //   {
    //     reviewText: 'test text',
    //     reviewPhotos: "https://www.google.com/maps/place/IHOP/@36.8536693,-76.0231935,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNEx7zG8wwiC3WWONEoMrgCe7ajob25PMLQvCV-!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEx7zG8wwiC3WWONEoMrgCe7ajob25PMLQvCV-%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
    //     rating: 3,
    //     userId: 1,
    //     restaurantId: 1
    //   },
    //   {
    //     reviewText: 'test text again',
    //     reviewPhotos: "https://www.google.com/maps/place/IHOP/@36.8536693,-76.0231935,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNEx7zG8wwiC3WWONEoMrgCe7ajob25PMLQvCV-!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEx7zG8wwiC3WWONEoMrgCe7ajob25PMLQvCV-%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
    //     rating: 3,
    //     userId: 1,
    //     restaurantId: 2
    //   },
    //   {
    //     reviewText: 'Third Test',
    //     reviewPhotos: "https://www.google.com/maps/place/IHOP/@36.8536693,-76.0231935,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNEx7zG8wwiC3WWONEoMrgCe7ajob25PMLQvCV-!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNEx7zG8wwiC3WWONEoMrgCe7ajob25PMLQvCV-%3Dw203-h270-k-no!7i3024!8i4032!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
    //     rating: 5,
    //     userId: 4,
    //     restaurantId: 2
    //   }
    // ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
