"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Sighting, {
        through: "sighting_categories",
        foreignKey: "category_id",
        as: "sightings",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
      underscored: true,
    }
  );
  return Category;
};
