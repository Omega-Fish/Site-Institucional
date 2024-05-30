function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmacaoSenhaVar = ipt_confirmar_senha.value;
    var cpfVar = ipt_cpf.value;
    var telefoneCelVar = ipt_telefoneCel.value;
    var telefoneFixVar = ipt_telefoneFix.value;
    var chaveVar = ipt_chave.value;
    // var empresaVar = listaEmpresas.value
    if (
      nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == "" ||
      cpfVar == "" ||
      telefoneCelVar == "" ||
      chaveVar == ""
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Preencha os campos em vernelho)";

      // finalizarAguardar();
      return false;
    } else {
      // setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        cpfServer: cpfVar,
        telefoneCelServer: telefoneCelVar,
        telefoneFixServer: telefoneFixVar,
        chaveServer: chaveVar
        // empresaServer: empresaVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
          // finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
      });

    return false;
  }

  function listar() {
    fetch("/empresas/listar", {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((empresas) => {
          empresas.forEach((empresa) => {
            listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
          });
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }

  // function sumirMensagem() {
  //   cardErro.style.display = "none";
  // }


// function cadastrar() {
//     var usuario = ipt_nome.value;
//     var senha = ipt_senha.value;
//     var confirmacaoSenha = ipt_confirmar_senha.value;
//     var cpf = ipt_cpf.value;
//     var email = ipt_email.value;
//     var celular = ipt_telefoneCel.value;
//     var fixo = ipt_telefoneFix.value;
//     var chave = ipt_chave.value;

//     var aceito = 0;

//     /* Validação do usuario */
//     if(usuario.length < 3) {
//         ipt_nome.style.borderBottom = '1px solid #FF0000';
//         erro_usuario.style.display = 'block'
//     } else {
//         ipt_nome.style.borderBottom = '1px solid #FFFFFF';
//         erro_usuario.style.display = 'none'
//         aceito++
//     }

//    /* Validação da senha */
// if (senha.length < 6 && (senha.indexOf('&') == -1 || senha.indexOf('@') == -1 || senha.indexOf('#') == -1 || senha.indexOf('$') == -1 || senha.indexOf('%') == -1)) {
//     ipt_senha.style.borderBottom = '1px solid #FF0000';
//     erro_senha.style.display = 'block';
// } else {
//     ipt_senha.style.borderBottom = '1px solid #FFFFFF';
//     erro_senha.style.display = 'none';
//     aceito++;
// }


//     /* Validação da confirmação da senha */
//     if(confirmacaoSenha != senha) {
//         ipt_confirmar_senha.style.borderBottom = '1px solid #FF0000';
//         erro_confirmar_senha.style.display = 'block'
//     } else {
//         ipt_confirmar_senha.style.borderBottom = '1px solid #FFFFFF';
//         erro_confirmar_senha.style.display = 'none'
//         aceito++
//     }

//     /* Validação do CPF */
//     if(cpf.length != 11) {
//         ipt_cpf.style.borderBottom = '1px solid #FF0000';
//         erro_cpf.style.display = 'block'
//     } else {
//         ipt_cpf.style.borderBottom = '1px solid #FFFFFF';
//         erro_cpf.style.display = 'none'
//         aceito++
//     }
    
//     /* Validação do e-mail */
//     if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
//         ipt_email.style.borderBottom = '1px solid #FF0000';
//         erro_email.style.display = 'block'
//     } else {
//         ipt_email.style.borderBottom = '1px solid #FFFFFF';
//         erro_email.style.display = 'none'
//         aceito++
//     }

//     /* Validação do celular */
//     if(celular.length != 11) {
//         ipt_telefoneCel.style.borderBottom = '1px solid #FF0000';
//         erro_celular.style.display = 'block'
//     } else {
//         ipt_telefoneCel.style.borderBottom = '1px solid #FFFFFF';
//         erro_celular.style.display = 'none'
//         aceito++
//     }

//     /* Validação do fixo */
//     if(fixo.length >= 1 && fixo.length <= 9) {
//         ipt_telefoneFix.style.borderBottom = '1px solid #FF0000';
//         erro_fixo.style.display = 'block'
//     } else {
//         ipt_telefoneFix.style.borderBottom = '1px solid #FFFFFF';
//         erro_fixo.style.display = 'none'
//         aceito++
//     }

//     /* Validação do token/chave de acesso */
//     if(chave.length < 10) {
//         ipt_chave.style.borderBottom = '1px solid #FF0000';
//         erro_chave.style.display = 'block'
//     } else {
//         ipt_chave.style.borderBottom = '1px solid #FFFFFF';
//         erro_chave.style.display = 'none'
//         aceito++
//     }

//     if(aceito == 8) {
//         alert('Usuario Cadastrado com Sucesso!');
//         window.open('login.html', '_self')
//     }

// }

// Validação para fazer o login

function entrar() {
    // aguardar();
  
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var chaveVar = ipt_chave.value;
  
    if ( emailVar == "" || senhaVar == "" || chaveVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        // finalizarAguardar();
        return false;
    }
    else {
        // setInterval(sumirMensagem, 5000)
       
    
  
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
  
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar,
            chaveServer: chaveVar,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
  
        if (resposta.ok) {
            console.log(resposta);
  
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.ID_EMPRESA = json.idEmpresa;
                // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)
  
                //  setTimeout(function () {
                //      window.location = "http://localhost:3333/Dashboard/DashboardHome.html";
                //  }, 1000); // apenas para exibir o loading

                window.open("http://localhost:3333/Dashboard/DashboardHome.html");
  
            });
  
        } else {
  
            console.log("Houve um erro ao tentar realizar o login!");
  
            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }
  
    }).catch(function (erro) {
        console.log(erro);
    })
  
    return false;
  }
}
  // function sumirMensagem() {
  //   cardErro.style.display = "none"
  // }




// function entrar(){
//     var usuario = ipt_nome.value;
//     var senha = ipt_senha.value;
//     var chave = ipt_chave.value;

//     if (usuario == "Luana Oliveira" && senha == "123456" && chave == '15bc0953978a6b450e42baa3675574eb'){
//         alert(`Acesso Autorizado.`)
//         window.open('Dashboard/DashboardHome.html', '_self')
//     } else {
//         alert(`Acesso Negado, tente novamente.`)
//     }
// }