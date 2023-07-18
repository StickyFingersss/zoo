"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal }) {
      this.belongsTo(Animal, { foreignKey: "animal_id" });
    }
  }
  Image.init(
    {
      link: DataTypes.STRING,
      animal_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
