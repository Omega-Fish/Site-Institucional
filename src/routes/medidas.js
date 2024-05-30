var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/tempo-real/:idCamara", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimaHora/:idCamara", function (req, res) {
    medidaController.buscarMedidasUltimaHora(req, res);
})

router.get("/ultimoDia/:idCamara", function (req, res) {
    medidaController.buscarMedidasUltimoDia(req, res);
});

module.exports = router;