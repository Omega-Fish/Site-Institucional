// BOTÃO FULLSCREEN
var isFullScreen = false;
var elem = document.documentElement;
function AtivarDesativarFS() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    isFullScreen = false;
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
    isFullScreen = false;
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari & Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
    isFullScreen = false;
  }

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    isFullScreen = true;
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
    isFullScreen = true;
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
    isFullScreen = true;
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
    isFullScreen = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const sidebar = document.getElementById("sidebar");
  const corpo = document.getElementById("corpo");

  toggle.addEventListener("click", () => {
    if (sidebar.classList.contains("retrair")) {
      sidebar.classList.remove("retrair");
      setTimeout(() => {
        corpo.classList.remove("retrair");
      }, 300);
    } else {
      sidebar.classList.add("retrair");
      corpo.classList.add("retrair");
    }
  });
});
var verificacao = false;

function exibirPopup() {
  popup.style.display = "block";
  verificacao = true;
  atualizacoes.style.display = "none";
  logout.style.display = "none";
  configuracoes.style.display = "none";
}

function fecharPopup() {
  if (verificacao) {
    popup.style.display = "none";
    verificacao = false;
  }
}
var verificacao_atualizacao = false;
function exibirAtualizacoes() {
  atualizacoes.style.display = "block";
  verificacao_atualizacao = true;
  popup.style.display = "none";
  logout.style.display = "none";
  configuracoes.style.display = "none";
}

function fecharAtualizacoes() {
  if (verificacao_atualizacao) {
    atualizacoes.style.display = "none";
    verificacao_atualizacao = false;
  }
}
var verificacao_logout = false;

function exibirLogout() {
  logout.style.display = "block";
  verificacao_logout = true;
  atualizacoes.style.display = "none";
  popup.style.display = "none";
  configuracoes.style.display = "none";
}

function fecharLogout() {
  if (verificacao_logout) {
    logout.style.display = "none";
    verificacao_logout = false;
  }
}
var verificacao_configuracoes = false;

function exibirConfiguracoes() {
  configuracoes.style.display = "block";
  verificacao_configuracoes = true;
  atualizacoes.style.display = "none";
  popup.style.display = "none";
  logout.style.display = "none";
}

function fecharConfiguracoes() {
  if (verificacao_configuracoes) {
    configuracoes.style.display = "none";
    verificacao_configuracoes = false;
  }
}

function mostrarNome() {
  var nome = sessionStorage.getItem("NOME_USUARIO");
  document.querySelector(".header-end h3").textContent = nome;
}

var lista_dadosCamaras = [];
function buscarCamaras() {
  fetch("http://localhost:3333/camaras/2").then((res) => {
    res.json().then((response) => {
      for (var i = 0; i < response.length; i++) {
        buscarDadosCamaras(response[i]);
      }
    });
  });
}

function buscarDadosCamaras(camara) {
  fetch(`http://localhost:3333/camaras/${camara.idCamaraCaminhao}/dados`).then(
    (res) => {
      res.json().then((response) => {
        mostrarCamaras(response);
      });
    }
  );
}

var camaraCaminhao = 1;
var camarasTotal = 0;
var camarasControladas = 0;
var camarasInstaveis = 0;
var camarasCriticas = 0;
function mostrarCamaras(dadosCamaras) {
  camarasTotal++;
  var idCamaraCaminhao = dadosCamaras[0].idCamaraCaminhao;
  var tempCamaraCaminhao = dadosCamaras[0].SensorTemp;
  var umidCamaraCaminhao = dadosCamaras[0].SensorUmid;

  var estadoCamaraCaminhao = 0;

  if (
    tempCamaraCaminhao >= 0 &&
    tempCamaraCaminhao <= 2 &&
    umidCamaraCaminhao <= 100 &&
    umidCamaraCaminhao >= 50
  ) {
    estadoCamaraCaminhao = 1;
    camarasControladas++;
  } else if (
    (tempCamaraCaminhao >= 2 && tempCamaraCaminhao <= 4) ||
    (umidCamaraCaminhao <= 50 && umidCamaraCaminhao >= 40)
  ) {
    estadoCamaraCaminhao = 2;
    camarasInstaveis++;
  } else {
    estadoCamaraCaminhao = 3;
    camarasCriticas++;
  }

  if (idCamaraCaminhao % 2 == 0) {
    divisao1.innerHTML += `<div onclick="ExibirDetalhes(${idCamaraCaminhao})" class="camara">
      <span>Câmara ${camaraCaminhao}</span>
      <img src="assets/imagensdash/container (${estadoCamaraCaminhao}).png" alt="">
    </div>`;
    camaraCaminhao++;
  } else {
    divisao2.innerHTML += `<div onclick="ExibirDetalhes(${idCamaraCaminhao})" class="camara">
      <span>Câmara ${camaraCaminhao}</span>
      <img src="assets/imagensdash/container (3).png" alt="">
    </div>`;
    camaraCaminhao++;
  }

  document.querySelector(
    ".kpi1 .digital h2"
  ).textContent = `${camarasTotal} Câmaras`;
  document.querySelector(
    ".kpi2 .digital h2"
  ).textContent = `${camarasControladas} Câmaras`;
  document.querySelector(
    ".kpi3 .digital h2"
  ).textContent = `${camarasInstaveis} Câmaras`;
  document.querySelector(
    ".kpi4 .digital h2"
  ).textContent = `${camarasCriticas} Câmaras`;

  mostrarNome();
}

function ExibirDetalhes(idCamara) {
  sessionStorage.setItem("idCamara", idCamara);
  window.open("./Câmaras/Câmara.html", "_self");
}

buscarCamaras();
