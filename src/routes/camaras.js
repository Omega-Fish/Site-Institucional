var express = require("express");
var router = express.Router();

var camaraController = require("../controllers/camaraController");

router.get("/:idEmpresa", function (req, res) {
  camaraController.buscarCamarasPorEmpresa(req, res);
});

router.get("/:idCamara/dados", function (req, res) {
  camaraController.buscarDadosCamaras(req, res);
});

module.exports = router;