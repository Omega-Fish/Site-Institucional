function cadastrar() {
    var usuario = ipt_nome.value;
    var senha = ipt_senha.value;
    var confirmacaoSenha = ipt_confirmar_senha.value;
    var cpf = ipt_cpf.value;
    var email = ipt_email.value;
    var celular = ipt_telefoneCel.value;
    var fixo = ipt_telefoneFix.value;
    var chave = ipt_chave.value;

    var aceito = 0;

    /* Validação do usuario */
    if(usuario.length < 3) {
        ipt_nome.style.borderBottom = '1px solid #FF0000';
        erro_usuario.style.display = 'block'
    } else {
        ipt_nome.style.borderBottom = '1px solid #FFFFFF';
        erro_usuario.style.display = 'none'
        aceito++
    }

   /* Validação da senha */
if (senha.length < 6 && (senha.indexOf('&') == -1 || senha.indexOf('@') == -1 || senha.indexOf('#') == -1 || senha.indexOf('$') == -1 || senha.indexOf('%') == -1)) {
    ipt_senha.style.borderBottom = '1px solid #FF0000';
    erro_senha.style.display = 'block';
} else {
    ipt_senha.style.borderBottom = '1px solid #FFFFFF';
    erro_senha.style.display = 'none';
    aceito++;
}


    /* Validação da confirmação da senha */
    if(confirmacaoSenha != senha) {
        ipt_confirmar_senha.style.borderBottom = '1px solid #FF0000';
        erro_confirmar_senha.style.display = 'block'
    } else {
        ipt_confirmar_senha.style.borderBottom = '1px solid #FFFFFF';
        erro_confirmar_senha.style.display = 'none'
        aceito++
    }

    /* Validação do CPF */
    if(cpf.length != 11) {
        ipt_cpf.style.borderBottom = '1px solid #FF0000';
        erro_cpf.style.display = 'block'
    } else {
        ipt_cpf.style.borderBottom = '1px solid #FFFFFF';
        erro_cpf.style.display = 'none'
        aceito++
    }
    
    /* Validação do e-mail */
    if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        ipt_email.style.borderBottom = '1px solid #FF0000';
        erro_email.style.display = 'block'
    } else {
        ipt_email.style.borderBottom = '1px solid #FFFFFF';
        erro_email.style.display = 'none'
        aceito++
    }

    /* Validação do celular */
    if(celular.length != 11) {
        ipt_telefoneCel.style.borderBottom = '1px solid #FF0000';
        erro_celular.style.display = 'block'
    } else {
        ipt_telefoneCel.style.borderBottom = '1px solid #FFFFFF';
        erro_celular.style.display = 'none'
        aceito++
    }

    /* Validação do fixo */
    if(fixo.length >= 1 && fixo.length <= 9) {
        ipt_telefoneFix.style.borderBottom = '1px solid #FF0000';
        erro_fixo.style.display = 'block'
    } else {
        ipt_telefoneFix.style.borderBottom = '1px solid #FFFFFF';
        erro_fixo.style.display = 'none'
        aceito++
    }

    /* Validação do token/chave de acesso */
    if(chave.length < 10) {
        ipt_chave.style.borderBottom = '1px solid #FF0000';
        erro_chave.style.display = 'block'
    } else {
        ipt_chave.style.borderBottom = '1px solid #FFFFFF';
        erro_chave.style.display = 'none'
        aceito++
    }

    if(aceito == 8) {
        alert('Usuario Cadastrado com Sucesso!');
        window.open('login.html', '_self')
    }

}

// Validação para fazer o login
function entrar(){
    var usuario = ipt_nome.value;
    var senha = ipt_senha.value;
    var chave = ipt_chave.value;

    if (usuario == "Luana Oliveira" && senha == "123456" && chave == '15bc0953978a6b450e42baa3675574eb'){
        alert(`Acesso Autorizado.`)
        window.open('Dashboard/DashboardHome.html', '_self')
    } else {
        alert(`Acesso Negado, tente novamente.`)
    }
}