var database = require("../database/config");

function buscarMedidasEmTempoReal(idCamara) {

    var instrucaoSql = `
        select SensorTemp, SensorUmid, Date_format(HoraColeta, "%T") as HoraColeta from CamaraCaminhao join Sensor
        on idCamaraCaminhao = fkCamaraCaminhao
        join Dados
        on idSensor = fkSensor
        where idCamaraCaminhao = ${idCamara} limit 6;
    `;

    return database.executar(instrucaoSql);
}

function buscarMedidasUltimaHora(idCamara) {

    var instrucaoSql = `
        select SensorTemp, SensorUmid, Date_format(HoraColeta, "%i") as HoraColeta from CamaraCaminhao join Sensor
        on idCamaraCaminhao = fkCamaraCaminhao
        join Dados
        on idSensor = fkSensor
        where idCamaraCaminhao = ${idCamara} and HoraColeta > DATE_SUB(current_time(), INTERVAL 1 HOUR);
    `;

    return database.executar(instrucaoSql);
}

function buscarMedidasUltimoDia(idCamara) {

    var instrucaoSql = `
        select SensorTemp, SensorUmid, Date_format(HoraColeta, "%H") as HoraColeta from CamaraCaminhao join Sensor
        on idCamaraCaminhao = fkCamaraCaminhao
        join Dados
        on idSensor = fkSensor
        where idCamaraCaminhao = ${idCamara} and HoraColeta > DATE_SUB(current_date(), INTERVAL 1 DAY);
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasUltimaHora,
    buscarMedidasUltimoDia
}
