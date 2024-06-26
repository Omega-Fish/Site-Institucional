var database = require("../database/config");

function buscarMedidasEmTempoReal(idCamara) {
  var instrucaoSql = `
        select SensorTemp, SensorUmid, Date_format(HoraColeta, "%T") as HoraColeta from CamaraCaminhao join Sensor
        on idCamaraCaminhao = fkCamaraCaminhao
        join Dados
        on idSensor = fkSensor
        where idCamaraCaminhao = ${idCamara} order by 3 desc limit 6;
    `;

  return database.executar(instrucaoSql);
}

function buscarMedidasUltimaHora(idCamara) {
  var instrucaoSql = `
        select SensorTemp, SensorUmid, Date_format(HoraColeta, "%H:%ih") as HoraColeta from CamaraCaminhao join Sensor
        on idCamaraCaminhao = fkCamaraCaminhao
        join Dados
        on idSensor = fkSensor
        where idCamaraCaminhao = ${idCamara} and HoraColeta > DATE_SUB(current_time(), INTERVAL 1 HOUR) order by 3;
    `;

  return database.executar(instrucaoSql);
}

function buscarMedidasUltimoDia(idCamara) {
  var instrucaoSql = `
        select distinct SensorTemp, SensorUmid, Date_format(HoraColeta, "%Hh") as HoraColeta from CamaraCaminhao join Sensor
        on idCamaraCaminhao = fkCamaraCaminhao
        join Dados
        on idSensor = fkSensor
        where idCamaraCaminhao = ${idCamara} and HoraColeta > DATE_SUB(current_date(), INTERVAL 1 DAY) order by 3;
    `;
  return database.executar(instrucaoSql);
}

function buscarMedidasMes(idCamara) {
  var instrucaoSql = `
    select truncate(avg(SensorTemp), 1) as SensorTemp, truncate(avg(SensorUmid), 1) as SensorUmid, Date_format(HoraColeta, "%b") as HoraColeta from CamaraCaminhao join Sensor
    on idCamaraCaminhao = fkCamaraCaminhao
    join Dados
    on idSensor = fkSensor
    where idCamaraCaminhao = ${idCamara} group by 3;
  `;
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMedidasEmTempoReal,
  buscarMedidasUltimaHora,
  buscarMedidasUltimoDia,
  buscarMedidasMes,
};
