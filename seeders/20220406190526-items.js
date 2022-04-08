'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     await queryInterface.bulkInsert('items', [{
       category: 'furniture',
       listingName: 'chair',
       listingDescription: 'big chair',
       listingPrice: 5,
       inCart: false,
       userID: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      category: 'furniture',
      listingName: 'chair 2',
      listingDescription: 'big chair',
      listingPrice: 5,
      inCart: false,
      userID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
