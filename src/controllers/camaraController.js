var camaraModel = require("../models/camaraModel");

function buscarCamarasPorEmpresa(req, res) {
  var idEmpresa = req.params.idEmpresa;

 camaraModel.buscarCamarasPorEmpresa(idEmpresa).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as Camaras: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarDadosCamaras(req, res) {
  var idCamara = req.params.idCamara;

  camaraModel.buscarDadosCamaras(idCamara).then(resultado => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os dados das camaras: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarCamarasPorEmpresa,
  buscarDadosCamaras
}