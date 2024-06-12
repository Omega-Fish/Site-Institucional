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

                if(json.email = 'suporte@omegafish.com' && chaveVar == 'b29846796f455fd23603b09226920624') {
                  window.open("http://localhost:3330", "_self");
                } else {
                  window.open("/Dashboard/DashboardHome.html", "_self");
                }
  
            });
  
        } else {
  
            console.log("Houve um erro ao tentar realizar o login!");
  
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
  
    }).catch(function (erro) {
        console.log(erro);
    })
  
    return false;
  }
}