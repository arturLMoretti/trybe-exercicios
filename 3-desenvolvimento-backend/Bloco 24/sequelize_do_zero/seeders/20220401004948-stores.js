"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Stores", [
      {
        id: 55,
        name: "Banana",
        description: "Loja de bananas",
      },
      {
        name: "Agua",
        description: "Loja de água",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Store", null, []);
  },
};
