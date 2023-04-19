'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tatuador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tatuador_nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      tatuador_informação: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      tatuador_especialidade: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UsuariosId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      }
   });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tatuador');
  }
};