"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Animals",
      [
        {
          name: "",
          description: "",
          species: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "",
          description: "",
          species: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "",
          description: "",
          species: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "",
          description: "",
          species: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Animals", null, {});
  },
};
