'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const mockUsers = new Array(100).fill().map(() => ({
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    await queryInterface.bulkInsert('Users', mockUsers, {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
