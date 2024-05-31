var medidaModel = require("../models/medidaModel");

function buscarMedidasEmTempoReal(req, res) {

    var idCamara = req.params.idCamara;

    medidaModel.buscarMedidasEmTempoReal(idCamara).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasUltimaHora(req, res) {

    var idCamara = req.params.idCamara;

    medidaModel.buscarMedidasUltimaHora(idCamara).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send([{}])
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasUltimoDia(req, res) {

    var idCamara = req.params.idCamara;

    medidaModel.buscarMedidasUltimoDia(idCamara).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasUltimaHora,
    buscarMedidasUltimoDia
}