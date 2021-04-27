'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [{
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password'),
    }]

    for (let i = 0; i < 20; i++) {
      users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      })
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
