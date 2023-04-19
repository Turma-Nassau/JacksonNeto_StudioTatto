const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const tatuagemModel = require('../models/tatuagem')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criartatuagem = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await tatuagemModel.create({
        userId: req.body.userId,
        tatuagem_tipo: req.body.tipo,
        tatuagem_tamanho: req.body.tamanho,
        tatuagem_traço: req.body.traço,
    }).then((result) => {
        res.status(201).json({
            message: "tatuagem criada com sucesso!",
            tatuagem: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar tatuagem",
            error: err
        });
    });
}

exports.vertatuagemPorId = async (req, res) => {
    console.log('GET');
    await tatuagemModel.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "tatuagem encontrada",
            tatuagem: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar tatuagem",
            error: err
        });
    });
}

exports.vertatuagemsPorUsuario = async (req, res) => {
    console.log('GET');
    await tatuagemModel.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "tatuagems encontradas",
            tatuagems: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar tatuagems",
            error: err
        });
    });
}

exports.verTodastatuagems = async (req, res) => {
    console.log('GET');
    await tatuagemModel.findAll().then((result) => {
        res.status(200).json({
            message: "tatuagems encontradas",
            tatuagems: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar tatuagems",
            error: err
        });
    });
}

exports.atualizartatuagem = async (req, res) => {
    console.log('PATCH');
    await tatuagemModel.update({
        tatuagem_tipo: req.body.tipo,
        tatuagem_tamanho: req.body.tamanho,
        tatuagem_traço: req.body.traço,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "tatuagem atualizada",
            tatuagem: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar tatuagem",
            error: err
        });
    });
}

exports.deletartatuagem = async (req, res) => {
    console.log('DELETE');
    await tatuagemModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "tatuagem deletada",
            tatuagem: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar tatuagem",
            error: err
        });
    });
}