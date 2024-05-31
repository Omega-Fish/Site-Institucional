// Gráficos

// Função para abrir a aba - Temp
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Esconde os elementos exceto a aba que está clicada
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove a classe active de todos os botões das abas
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostra o conteúdo da aba selecionada
  document.getElementById(tabName).style.display = "block";

  // Adiciona a classe active para o botão qdo a aba é aberta
  evt.currentTarget.className += " active";
}

// Função para abrir a aba - Umid
function openTab2(evt, tabName) {
  var i, tabcontent, tablinks;

  // Esconde os elementos exceto a aba que está clicada
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove a classe active de todos os botões das abas
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  // Mostra o conteúdo da aba selecionada
  document.getElementById(tabName).style.display = "block";

  // Adiciona a classe active para o botão qdo a aba é aberta
  evt.currentTarget.className += " active";
}

function buscarDados() {
  var idCamara = sessionStorage.getItem("idCamara");

  fetch(`http://localhost:3333/medidas/tempo-real/${idCamara}`).then((res) => {
    res.json().then((response) => {
      tratarDadosUmidReal(response);
      tratarDadosTempReal(response);
    });
  });

  fetch(`http://localhost:3333/medidas/ultimaHora/${idCamara}`).then((res) => {
    res.json().then((response) => {
      tratarDadosUmidHora(response);
      tratarDadosTempHora(response);
    });
  });

  fetch(`http://localhost:3333/medidas/ultimoDia/${idCamara}`).then((res) => {
    res.json().then((response) => {
      tratarDadosUmidDia(response);
      tratarDadosTempDia(response);
    });
  });
}

function tratarDadosTempReal(dados) {
  var lista_temp = [];
  var lista_tempHoraColeta = [];

  for (var i = 0; i < dados.length; i++) {
    lista_temp.push(dados[i].SensorTemp);
    lista_tempHoraColeta.push(dados[i].HoraColeta);
  }
  renderChart1(lista_temp, lista_tempHoraColeta);
}

function tratarDadosTempHora(dados) {
  var lista_temp = [];
  var lista_tempHoraColeta = [];

  for (var i = 0; i < dados.length; i++) {
    lista_temp.push(dados[i].SensorTemp);
    lista_tempHoraColeta.push(dados[i].HoraColeta);
  }
  renderChart2(lista_temp, lista_tempHoraColeta);
}

function tratarDadosTempDia(dados) {
  var lista_temp = [];
  var lista_tempHoraColeta = [];

  for (var i = 0; i < dados.length; i++) {
    lista_temp.push(dados[i].SensorTemp);
    lista_tempHoraColeta.push(dados[i].HoraColeta);
  }
  renderChart3(lista_temp, lista_tempHoraColeta);
}

function tratarDadosUmidReal(dados) {
  var lista_umid = [];
  var lista_umidHoraColeta = [];

  for (var i = 0; i < dados.length; i++) {
    lista_umid.push(dados[i].SensorUmid);
    lista_umidHoraColeta.push(dados[i].HoraColeta);
  }
  renderChart4(lista_umid, lista_umidHoraColeta);
}

function tratarDadosUmidHora(dados) {
  var lista_umid = [];
  var lista_umidHoraColeta = [];

  for (var i = 0; i < dados.length; i++) {
    lista_umid.push(dados[i].SensorUmid);
    lista_umidHoraColeta.push(dados[i].HoraColeta);
  }
  renderChart5(lista_umid, lista_umidHoraColeta);
}

function tratarDadosUmidDia(dados) {
  var lista_umid = [];
  var lista_umidHoraColeta = [];

  for (var i = 0; i < dados.length; i++) {
    lista_umid.push(dados[i].SensorUmid);
    lista_umidHoraColeta.push(dados[i].HoraColeta);
  }
  renderChart6(lista_umid, lista_umidHoraColeta);
}

Chart.defaults.color = "#fff";
// Primeiro Gráfico - Temperatura
function renderChart1(lista_temp, lista_tempHoraColeta) {
  var ctx1 = document.getElementById("Temp_TempoReal").getContext("2d");
  var Temp_TempoReal = new Chart(ctx1, {
    type: "line",
    data: {
      labels: lista_tempHoraColeta,
      datasets: [
        {
          label: "Temperatura",
          data: lista_temp,
          borderColor: "rgb(255, 151, 46)",
          backgroundcolor: "rgb(13, 14, 43)",
          color: "rgb(255, 255, 255)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0, // Define o limite mínimo do eixo y
          max: 8, // Define o limite máximo do eixo y
          ticks: {
            count: 5, // Defina o número desejado de labels no eixo y
            callback: function (value, index, values) {
              return value + "°C"; // Adiciona o símbolo de grau Celsius
            },
            padding: 15,
          },
          grid: {
            color: "rgb(35, 35, 35)", // Cor das linhas de grade do eixo y
          },
        },
        x: {
          grid: {
            color: "rgb(35, 35,35)", // Cor das linhas de grade do eixo x
          },
        },
      },
    },
  });
}

// Segundo Gráfico - Temperatura
function renderChart2(lista_temp, lista_tempHoraColeta) {
  var ctx2 = document.getElementById("Temp_Semana").getContext("2d");
  var Temp_Semana = new Chart(ctx2, {
    type: "line",
    data: {
      labels: lista_tempHoraColeta,
      datasets: [
        {
          label: "Temperatura",
          data: lista_temp,
          borderColor: "rgb(255, 151, 46)",
          backgroundcolor: "rgb(13, 14, 43)",
          lineTension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0, // Define o limite mínimo do eixo y
          max: 8, // Define o limite máximo do eixo y
          ticks: {
            count: 5, // Defina o número desejado de labels no eixo y
            callback: function (value, index, values) {
              return value + "°C"; // Adiciona o símbolo de grau Celsius
            },
            padding: 15,
          },
          grid: {
            color: "rgb(35, 35, 35)", // Cor das linhas de grade do eixo y
          },
        },
        x: {
          grid: {
            color: "rgb(35, 35,35)", // Cor das linhas de grade do eixo x
          },
        },
      },
    },
  });
}

// Terceiro Gráfico - Temperatura
function renderChart3(lista_temp, lista_tempHoraColeta) {
  var ctx3 = document.getElementById("Temp_Mes").getContext("2d");
  var Temp_Mes = new Chart(ctx3, {
    type: "line",
    data: {
      labels: lista_tempHoraColeta,
      datasets: [
        {
          label: "Temperatura",
          data: lista_temp,
          borderColor: "rgb(255, 151, 46)",
          backgroundcolor: "rgb(13, 14, 43)",
          lineTension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0, // Define o limite mínimo do eixo y
          max: 8, // Define o limite máximo do eixo y
          ticks: {
            count: 5, // Defina o número desejado de labels no eixo y
            callback: function (value, index, values) {
              return value + "°C"; // Adiciona o símbolo de grau Celsius
            },
            padding: 15,
          },
          grid: {
            color: "rgb(35, 35, 35)", // Cor das linhas de grade do eixo y
          },
        },
        x: {
          grid: {
            color: "rgb(35, 35,35)", // Cor das linhas de grade do eixo x
          },
        },
      },
    },
  });
}

// Quarto Gráfico - Umidade
function renderChart4(lista_umid, lista_umidHoraColeta) {
  var ctx4 = document.getElementById("Umid_TempoReal").getContext("2d");
  var Umid_TempoReal = new Chart(ctx4, {
    type: "line",
    data: {
      labels: lista_umidHoraColeta,
      datasets: [
        {
          label: "Umidade",
          data: lista_umid,
          borderColor: "rgb(0, 195, 255)",
          backgroundcolor: "rgb(13, 14, 43)",
          lineTension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 51, // Define o limite mínimo do eixo y
          max: 55, // Define o limite máximo do eixo y
          ticks: {
            count: 5, // Defina o número desejado de labels no eixo y
            callback: function (value, index, values) {
              return value + "%"; // Adiciona o símbolo de porcentagem
            },
            padding: 15,
          },
          grid: {
            color: "rgb(35, 35, 35)", // Cor das linhas de grade do eixo y
          },
        },
        x: {
          grid: {
            color: "rgb(35, 35,35)", // Cor das linhas de grade do eixo x
          },
        },
      },
    },
  });
}

// Quinto Gráfico - Umidade
function renderChart5(lista_umid, lista_umidHoraColeta) {
  var ctx5 = document.getElementById("Umid_Semana").getContext("2d");
  var Umid_Semana = new Chart(ctx5, {
    type: "line",
    data: {
      labels: lista_umidHoraColeta,
      datasets: [
        {
          label: "Umidade",
          data: lista_umid,
          borderColor: "rgb(0, 195, 255)",
          backgroundcolor: "rgb(13, 14, 43)",
          lineTension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0, // Define o limite mínimo do eixo y
          max: 100, // Define o limite máximo do eixo y
          ticks: {
            count: 5, // Defina o número desejado de labels no eixo y
            callback: function (value, index, values) {
              return value + "%"; // Adiciona o símbolo de porcentagem
            },
            padding: 15,
          },
          grid: {
            color: "rgb(35, 35, 35)", // Cor das linhas de grade do eixo y
          },
        },
        x: {
          grid: {
            color: "rgb(35, 35,35)", // Cor das linhas de grade do eixo x
          },
        },
      },
    },
  });
}

// Sexto Gráfico - Umidade
function renderChart6(lista_umid, lista_umidHoraColeta) {
  var ctx6 = document.getElementById("Umid_Mes").getContext("2d");
  var Umid_Mes = new Chart(ctx6, {
    type: "line",
    data: {
      labels: lista_umidHoraColeta,
      datasets: [
        {
          label: "Umidade",
          data: lista_umid,
          borderColor: "rgb(0, 195, 255)",
          backgroundcolor: "rgb(13, 14, 43)",
          lineTension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0, // Define o limite mínimo do eixo y
          max: 100, // Define o limite máximo do eixo y
          ticks: {
            count: 5, // Defina o número desejado de labels no eixo y
            callback: function (value, index, values) {
              return value + "%"; // Adiciona o símbolo de porcentagem
            },
            padding: 15,
          },
          grid: {
            color: "rgb(35, 35, 35)", // Cor das linhas de grade do eixo y
          },
        },
        x: {
          grid: {
            color: "rgb(35, 35,35)", // Cor das linhas de grade do eixo x
          },
        },
      },
    },
  });
}

buscarDados();
