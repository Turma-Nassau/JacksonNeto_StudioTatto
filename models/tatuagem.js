'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tatuagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Tatuagem.init({
    tatuagem_tipo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tatuagem_tamanho: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tatuagem_traço: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tatuagem',
  });
  return Tatuagem;
};