"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rates",
      [
        {
          day: "Будни",
          age: "Дети",
          price: 300,
          description: "Тариф для детей, будни",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          day: "Выходные",
          age: "Дети",
          price: 500,
          description: "Тариф для детей, выходные",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          day: "Будни",
          age: "Взрослые",
          price: 750,
          description: "Тариф для взрослых, будни",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          day: "Выходные",
          age: "Взрослые",
          price: 1000,
          description: "Тариф для взрослых, выходные",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rates", null, {});
  },
};
