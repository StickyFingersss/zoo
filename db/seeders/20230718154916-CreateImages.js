"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          link: "/img/1.jpg",
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/2.jpg",
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/3.jpg",
          animal_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/4.jpg",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/5.jpg",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/6.jpg",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/7.jpg",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/8.jpg",
          animal_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/9.jpg",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/10.jpg",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/11.jpg",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/12.jpg",
          animal_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/13.jpg",
          animal_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/14.jpg",
          animal_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          link: "/img/15.jpg",
          animal_id: 4,
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
