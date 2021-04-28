'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Restaurants', [
      {
        name: 'CheeseCake Factory',
        logo: faker.image.food(),
        hours: "8am to 11pm",
        rating: 4,
        photos: "https://www.google.com/maps/place/The+Cheesecake+Factory/@36.8433146,-76.1338372,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOhY1bDLeawQQb5EH-fKff39GGslMIRCCtWzXcc!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOhY1bDLeawQQb5EH-fKff39GGslMIRCCtWzXcc%3Dw203-h152-k-no!7i4032!8i3024!4m5!3m4!1s0x89ba959f8f450311:0x523f2a5c5e6561e2!8m2!3d36.8432597!4d-76.1341737?hl=en",
        description: faker.commerce.productAdjective()
      },
      {
        name: 'iHop',
        logo: faker.image.food(),
        hours: "8am to 11pm",
        rating: 3,
        photos: "https://www.google.com/maps/place/IHOP/@36.8536505,-76.0238232,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS%3Dw529-h298-k-no!7i5312!8i2988!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
        description: faker.commerce.productAdjective()
      },
      {
        name: 'Dennys',
        logo: faker.image.food(),
        hours: "9am to 11pm",
        rating: 2,
        photos: "https://www.google.com/maps/place/IHOP/@36.8536505,-76.0238232,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS%3Dw529-h298-k-no!7i5312!8i2988!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
        description: faker.commerce.productAdjective()
      },
      {
        name: 'Golden Corral',
        logo: faker.image.food(),
        hours: "8am to 9pm",
        rating: 1,
        photos: "https://www.google.com/maps/place/IHOP/@36.8536505,-76.0238232,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS%3Dw529-h298-k-no!7i5312!8i2988!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
        description: faker.commerce.productAdjective()
      },
      {
        name: 'Red Lobster',
        logo: faker.image.food(),
        hours: "10am to 10pm",
        rating: 5,
        photos: "https://www.google.com/maps/place/IHOP/@36.8536505,-76.0238232,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOSJNYo2Fxsi11d6oIbnuzh-E8zczXSGlg4hTqS%3Dw529-h298-k-no!7i5312!8i2988!4m11!1m2!2m1!1sihop!3m7!1s0x89baebb30f3d3b3f:0x96c67dc430a28267!8m2!3d36.8536505!4d-76.0238232!14m1!1BCgIgAQ!15sCgRpaG9wIgOIAQFaDAoEaWhvcCIEaWhvcJIBCnJlc3RhdXJhbnQ",
        description: faker.commerce.productAdjective()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Restaurants', null, {});

  }
};
