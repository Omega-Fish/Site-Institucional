var database = require("../database/config")

async function autenticar(email, senha, token) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `SELECT idEmpresa from Empresa join Usuario WHERE token = '${token}' and Usuario.Email = '${email}';`
    var idEmpresa = await database.executar(instrucaoSql);
    console.log(idEmpresa[0].idEmpresa)
    var instrucao2Sql = `UPDATE Usuario SET fkEmpresa = ${idEmpresa[0].idEmpresa} Where Email = '${email}'`
    database.executar(instrucao2Sql);
    
    var instrucao3Sql = `SELECT idUsuario, fkEmpresa, Nome, Email, CPF, TelefoneFixo, TelefoneCelular, Senha FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucao3Sql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, cpf, telefoneCel, telefoneFix, chave) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, chave);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Usuario (Nome, Email, CPF, TelefoneFixo, TelefoneCelular, Senha) VALUES ('${nome}', '${email}', '${cpf}', '${telefoneFix}', '${telefoneCel}', '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};