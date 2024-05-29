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
  logout.style.display = 'none';
  configuracoes.style.display = 'none';
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
  logout.style.display = 'none';
  configuracoes.style.display = 'none';
}

function fecharAtualizacoes() {
  if (verificacao_atualizacao) {
    atualizacoes.style.display = 'none';
    verificacao_atualizacao = false; 
  }
}
var verificacao_logout = false;

function exibirLogout() {
  logout.style.display = 'block';
  verificacao_logout = true; 
  atualizacoes.style.display = 'none';
  popup.style.display = 'none';
  configuracoes.style.display = 'none';
}

function fecharLogout() {
  if (verificacao_logout) {
    logout.style.display = 'none';
    verificacao_logout = false; 
  }
}
var verificacao_configuracoes = false;

function exibirConfiguracoes() {
  configuracoes.style.display = 'block';
  verificacao_configuracoes = true; 
  atualizacoes.style.display = 'none';
  popup.style.display = 'none';
  logout.style.display = 'none';
}

function fecharConfiguracoes() {
  if (verificacao_configuracoes) {
    configuracoes.style.display = 'none';
    verificacao_configuracoes = false; 
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

// window.onload = buscarCamaras()

// function buscarCamaras() {
//   fetch("http://localhost:3333/camaras/2").then(res => {
//     res.json().then(response => {
//       console.log(response)
//       mostrarCamaras(response)
//     })
//   })
// }

// function mostrarCamaras(camaras) {
//   for (var i = 0; i < camaras.length; i++) {
    
//     if (i%2 == 0) {
//       divisao2.innerHTML += `<div class="camara">
//         <span>Câmara ${i+1}</span>
//         <a href="Câmaras/Câmara 2.html"><img src="assets/imagensdash/container (3).png" alt=""></a>
//       </div>`  
//     } else {
//       divisao1.innerHTML += `<div class="camara">
//         <span>Câmara ${i+1}</span>
//         <a href="Câmaras/Câmara 2.html"><img src="assets/imagensdash/container (3).png" alt=""></a>
//       </div>`
//     }

//   }
//   document.querySelector('.kpi1 .digital h2').textContent = `${camaras.length} Câmaras`;
// }

/* document.querySelector('.kpi2 .digital h2').textContent = `${totalCamarasControladas} Câmaras`;
document.querySelector('.kpi3 .digital h2').textContent = `${totalCamarasInstaveis} Câmaras`;
document.querySelector('.kpi4 .digital h2').textContent = `${totalCamarasEmergencia} Câmaras`; */