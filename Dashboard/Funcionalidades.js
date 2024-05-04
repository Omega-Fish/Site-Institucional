// BOTÃO FULLSCREEN
var isFullScreen = false;
var elem = document.documentElement;
function AtivarDesativarFS() {
    
      if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullScreen = false;
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
      isFullScreen = false;
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
      isFullScreen = false;
    }

  if (elem.requestFullscreen) {
     elem.requestFullscreen();
     isFullScreen = true;
  } else if (elem.mozRequestFullScreen) { /* Firefox */
     elem.mozRequestFullScreen();
      isFullScreen = true;
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
     isFullScreen = true;
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
     isFullScreen = true;
  }

}

// Botão Light Mode e Dark Mode

document.addEventListener("DOMContentLoaded", function() {
  const mode = document.getElementById('mode');
  const body = document.getElementById('conteudo');


  mode.addEventListener("click", () => {
    
      if(body.classList.contains("light")) {
        body.classList.remove("light")
        modeText.innerText = "Light Mode"; // Atualiza o texto do botão
        mode.classList.replace('bx-moon', 'bx-sun'); // Substitui o ícone da lua pelo ícone do sol
      } else {
        body.classList.add("light")
        modeText.innerText = "Dark Mode"; // Atualiza o texto do botão
        mode.classList.replace('bx-sun', 'bx-moon'); // Substitui o ícone da lua pelo ícone do sol
      }
  })
});

document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById('toggle')
  const sidebar = document.getElementById('sidebar')
  const corpo = document.getElementById('corpo')



  toggle.addEventListener("click", () => {
    if(sidebar.classList.contains("retrair")) {
      sidebar.classList.remove("retrair")
      setTimeout(() => {
        corpo.classList.remove('retrair')
      }, 300);
      
      

    } else {
      sidebar.classList.add("retrair")
      corpo.classList.add('retrair')

    }
  })
})
var verificacao = false;

function exibirPopup() {
  popup.style.display = 'block';
  verificacao = true; 
  atualizacoes.style.display = 'none';
}

function fecharPopup() {
  if (verificacao) {
    popup.style.display = 'none';
    verificacao = false; 
  }
}
var verificacao_atualizacao = false;
function exibirAtualizacoes() {
  atualizacoes.style.display = 'block';
  verificacao_atualizacao = true; 
  popup.style.display = 'none';
}

function fecharAtualizacoes() {
  if (verificacao_atualizacao) {
    atualizacoes.style.display = 'none';
    verificacao_atualizacao = false; 
  }
}
//Variáveis de Controle
    var temperatura = 1
    var umidade = 60
    var tempo = 5 
    var temperatura_gauge = temperatura
    var umidade_gauge = umidade
    var status_temperatura = 0
    var status_umidade = 0
    var status_geral = 0
    var unidade_tempo = `Dias`
    
    if(temperatura > 2 && temperatura < 3) {
      temperatura_gauge = 3
  } else if(temperatura > 4 && temperatura < 5) {
      temperatura_gauge = 5
  } 
  else if(temperatura_gauge > 5.8) {
      temperatura_gauge = 5.8
  }

  if(umidade > 95) {
      umidade_gauge = 95
  } else if (umidade < 40 && umidade > 18) {
      umidade_gauge = 18
  } else if(umidade < 5) {
      umidade_gauge = -10
  }

  if(temperatura <= 2) {
    status_temperatura = 1
} else if(temperatura <= 4) {
    status_temperatura = 2
} else {
    status_temperatura = 3
}

if(umidade >= 50) {
    status_umidade = 1
} else if(umidade >= 40) {
  status_umidade = 2
} else {
  status_umidade = 3
}
    if (status_temperatura > status_umidade) {
        status_geral = status_temperatura;
    } else {
        status_geral = status_umidade;
    }

//Planos Futuros
// Atualizar Dados Das KPIS Aleatoriamente
// function atualizarDados() {
//   temperatura = Math.floor(Math.random() * 11);
//   umidade = Math.floor(Math.random() * 11);
//   temperatura_gauge = temperatura
//   umidade_gauge = umidade
//   document.getElementById("mensagem_temperatura").innerHTML = `${temperatura}°C`;
//   document.getElementById("mensagem_umidade").innerHTML = `${umidade}%`;
// }

// setInterval(atualizarDados, 2000); // 5000 milissegundos = 5 segundos


  

// Planos Futuros
//     var temperatura2 = 1
//     var umidade2 = 12
//     var tempo2 = 5 
//     var temperatura_gauge2 = temperatura2
//     var umidade_gauge2 = umidade2
//     var status_temperatura2 = 0
//     var status_umidade2 = 0
//     var status_geral2 = 0
//     var unidade_tempo2 = `Dias`

//     var temperatura3 = 6
//     var umidade3 = 100
//     var tempo3 = 5 
//     var temperatura_gauge3 = temperatura3
//     var umidade_gauge3 = umidade3
//     var status_temperatura3 = 0
//     var status_umidade3 = 0
//     var status_geral3 = 0
//     var unidade_tempo3 = `Dias`

//     var temperatura4 = 10
//     var umidade4 = 40
//     var tempo4 = 5 
//     var temperatura_gauge4 = temperatura4
//     var umidade_gauge4= umidade4
//     var status_temperatura4 = 0
//     var status_umidade4 = 0
//     var status_geral4 = 0
//     var unidade_tempo4 = `Dias`

//     var temperatura5 = 1
//     var umidade5 = 50
//     var tempo5 = 5 
//     var temperatura_gauge5 = temperatura5
//     var umidade_gauge5= umidade5
//     var status_temperatura5 = 0
//     var status_umidade5 = 0
//     var status_geral5 = 0
//     var unidade_tempo5 = `Dias`

//     for(var cont = 1; cont <= 5; cont++ ) {
//       if (temperatura > 2 && temperatura < 3) {
//         window['temperatura_gauge' + cont] = 3;
//     } else if (temperatura > 4 && temperatura < 5) {
//         window['temperatura_gauge' + cont] = 5;
//     } else if (temperatura_gauge > 5.8) {
//         window['temperatura_gauge' + cont] = 5.8;
//     }

//     // Lógica para ajustar umidade_gauge
//     if (umidade > 95) {
//         window['umidade_gauge' + cont] = 95;
//     } else if (umidade < 40 && umidade > 18) {
//         window['umidade_gauge' + cont] = 18;
//     } else if (umidade < 5) {
//         window['umidade_gauge' + cont] = -10;
//     }

//     // Lógica para ajustar status_temperatura
//     if (temperatura <= 2) {
//         window['status_temperatura' + cont] = '1'; // Controlado
//     } else if (temperatura <= 4) {
//         window['status_temperatura' + cont] = '2'; // Instável
//     } else {
//         window['status_temperatura' + cont] = '3'; // Emergência
//     }

//     // Lógica para ajustar status_umidade
//     if (umidade >= 50) {
//         window['status_umidade' + cont] = '1'; // Controlado
//     } else if (umidade >= 40) {
//         window['status_umidade' + cont] = '2'; // Instável
//     } else {
//         window['status_umidade' + cont] = '3'; // Emergência
//     }

//     // Lógica para ajustar status_geral
//     if (window['status_temperatura' + cont] > window['status_umidade' + cont]) {
//         window['status_geral' + cont] = window['status_temperatura' + cont];
//     } else {
//         window['status_geral' + cont] = window['status_umidade' + cont];
//     }

//     // Agora cada variável é ajustada dinamicamente com base no valor de cont
// }
    
  
  
  
      




