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



// Adicione um evento de clique ao ícone de sino para chamar a função exibirPopup






