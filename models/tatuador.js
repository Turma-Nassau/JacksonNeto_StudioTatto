'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tatuador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Tatuador.init({
    tatuador_nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tatuador_informação: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tatuador_especialidade: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tatuador',
  });
  return Tatuador;
};