var database = require("../database/config");

function buscarCamarasPorEmpresa(empresaId) {

  var instrucaoSql = `
      select idCamaraCaminhao from CamaraCaminhao where fkEmpresa = ${empresaId};
    `;

  return database.executar(instrucaoSql);
}

function buscarDadosCamaras(camaraId) { 
  var instrucaoSql = `
    select idCamaraCaminhao, SensorTemp, SensorUmid from CamaraCaminhao join Sensor
    on idCamaraCaminhao = fkCamaraCaminhao
    join Dados
    on idSensor = fkSensor
    where idCamaraCaminhao = ${camaraId} order by idDados desc limit 1;
  `;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarCamarasPorEmpresa,
  buscarDadosCamaras
}
