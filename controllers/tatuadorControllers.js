const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const tatuadorModels = require('../models/tatuador')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.verTodastatuador = async (req, res) => {
    console.log('GET');
    await tatuadorModels.findAll().then((result) => {
        res.status(200).json({
            message: "tatuador encontradas",
            tatuador: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar tatuador",
            error: err
        });
    })
}

exports.vertatuadorPorUsuario = async (req, res) => {
    console.log('GET');
    await tatuadorModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "tatuador encontradas",
            tatuador: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar tatuador",
            error: err
        });
    })
}

exports.vertatuadorPorId = async (req, res) => {
    console.log('GET');
    await tatuadorModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "tatuador encontrada",
            tatuador: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar tatuador",
            error: err
        });
    })
}

exports.criartatuador = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await tatuadorModels.create({
        userId: req.body.userId,
        tatuador_nome: req.body.nome,
        tatuador_informação: req.body.informação,
        tatuador_especilidade: req.body.especialidade,
    }).then((result) => {
        res.status(201).json({
            message: "tatuador criada",
            tatuador: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar tatuador",
            error: err
        });
    })
}

exports.atualizartatuador = async (req, res) => {
    console.log('PATCH');
    await tatuadorModels.update({
        tatuador_nome: req.body.nome,
        tatuador_informação: req.body.informação,
        tatuador_especilidade: req.body.especialidade,
    }).then((result) => { 
        res.status(201).json({
            message: "tatuador atualizada",
            tatuador: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar tatuador",
            error: err
        });
    })
}

exports.deletartatuador = async (req, res) => {
    console.log('DELETE');
    await tatuadorModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "tatuador deletada",
            tatuador: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar tatuador",
            error: err
        });
    })
}

