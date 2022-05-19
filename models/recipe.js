'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING(200)
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });
    Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId' });

  };
  return Recipe;
};
