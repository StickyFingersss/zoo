"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          link: "/img/",
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
