var database = require("../database/config");

function buscarCamarasPorEmpresa(empresaId) {

  var instrucaoSql = `
      select idCamaraCaminhao from CamaraCaminhao where fkEmpresa = ${empresaId};
    `;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarCamarasPorEmpresa
}
