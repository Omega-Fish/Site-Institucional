// Gráficos 

// Renderiza os gráficos quando a página carrega
  window.onload = buscarDados()

  // Função para abrir a aba - Temp
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks, tablinks2;
  
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
  
  
    // Renderiza o gráfico quando a aba é clicada
    if (tabName === 'chartTab2') {
        renderChart2();
    } else if (tabName === 'chartTab3') {
        renderChart3();
    }
  
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
  
  
    // Renderiza o gráfico quando a aba é clicada
    if (tabName === 'chartTab5') {
        renderChart5();
    } else if (tabName === 'chartTab6') {
        renderChart6();
    }
  
  }
  
  Chart.defaults.color = '#fff'
  // Primeiro Gráfico - Temperatura
    function buscarDados() {
        var idCamara = sessionStorage.getItem("idCamara")

        fetch(`http://localhost:3333/medidas/tempo-real/${idCamara}`).then(res => {
            res.json().then(response => {
                tratarDadosTempReal(response)
            })
        })

        fetch(`http://localhost:3333/medidas/ultimaHora/${idCamara}`).then(res => {
            res.json().then(response => {
                tratarDadosTempHora(response)
            })
        })

        fetch(`http://localhost:3333/medidas/ultimoDia/${idCamara}`).then(res => {
            res.json().then(response => {
                tratarDadosTempDia(response)
            })
        })

    }

    function tratarDadosTempReal(dados) {
        var lista_temp = []
        var lista_tempHoraColeta = []

        for (var i = 0; i < dados.length; i++) {
            lista_temp.push(dados[i].SensorTemp)
            lista_tempHoraColeta.push(dados[i].HoraColeta)
        }
        renderChart1(lista_temp, lista_tempHoraColeta)
    }

    function tratarDadosTempHora(dados) {
        var lista_temp = []
        var lista_tempHoraColeta = []

        for (var i = 0; i < dados.length; i++) {
            lista_temp.push(dados[i].SensorTemp)
            lista_tempHoraColeta.push(dados[i].HoraColeta)
        }
        renderChart2(lista_temp, lista_tempHoraColeta)
    }

    function tratarDadosTempDia(dados) {
        var lista_temp = []
        var lista_tempHoraColeta = []

        for (var i = 0; i < dados.length; i++) {
            lista_temp.push(dados[i].SensorTemp)
            lista_tempHoraColeta.push(dados[i].HoraColeta)
        }
        renderChart3(lista_temp, lista_tempHoraColeta)
    }

  function renderChart1(lista_temp, lista_tempHoraColeta) {
    var ctx1 = document.getElementById('Temp_TempoReal').getContext('2d');
    var Temp_TempoReal = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: lista_tempHoraColeta,
            datasets: [{
                label: 'Temperatura',
                data: lista_temp,
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                color: 'rgb(255, 255, 255)',
            }]
        },
        options: {
        scales: {
            y: {
                min: 0, // Define o limite mínimo do eixo y
                max: 2, // Define o limite máximo do eixo y
                ticks: {
                    count: 5, // Defina o número desejado de labels no eixo y
                    callback: function(value, index, values) {
                        return value + '°C'; // Adiciona o símbolo de grau Celsius
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(35, 35, 35)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(35, 35,35)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  // Segundo Gráfico - Temperatura
  function renderChart2(lista_temp, lista_tempHoraColeta) {
    var ctx2 = document.getElementById('Temp_Semana').getContext('2d');
    var Temp_Semana = new Chart(ctx2, {
        type: 'line',
        data: {
  
            labels: lista_tempHoraColeta,
            datasets: [{
                label: 'Temperatura',
                data: lista_temp,
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 0, // Define o limite mínimo do eixo y
                max: 2, // Define o limite máximo do eixo y
                ticks: {
                    count: 5, // Defina o número desejado de labels no eixo y
                    callback: function(value, index, values) {
                        return value + '°C'; // Adiciona o símbolo de grau Celsius
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(35, 35, 35)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(35, 35,35)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  // Terceiro Gráfico - Temperatura
  function renderChart3(lista_temp, lista_tempHoraColeta) {
    var ctx3 = document.getElementById('Temp_Mes').getContext('2d');
    var Temp_Mes = new Chart(ctx3, {
        type: 'line',
        data: {
  
            labels: lista_tempHoraColeta,
            datasets: [{
                label: 'Temperatura',
                data: lista_temp,
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 0, // Define o limite mínimo do eixo y
                max: 2, // Define o limite máximo do eixo y
                ticks: {
                    count: 5, // Defina o número desejado de labels no eixo y
                    callback: function(value, index, values) {
                        return value + '°C'; // Adiciona o símbolo de grau Celsius
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(35, 35, 35)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(35, 35,35)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  // Quarto Gráfico - Umidade
  function renderChart4() {
    var ctx4 = document.getElementById('Umid_TempoReal').getContext('2d');
    var Temp_TempoReal = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['0', '2', '4', '6', '8', '10'],
            datasets: [{
                label: 'Umidade',
                data: [52, 53, 52, 52, 53, 53, 53, 54],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 51, // Define o limite mínimo do eixo y
                max: 55, // Define o limite máximo do eixo y
                ticks: {
                    count: 5, // Defina o número desejado de labels no eixo y
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(35, 35, 35)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(35, 35,35)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  // Quinto Gráfico - Umidade
  function renderChart5() {
    var ctx5 = document.getElementById('Umid_Semana').getContext('2d');
    var Temp_Semana = new Chart(ctx5, {
        type: 'line',
        data: {
  
            labels: ['8', '16', '24', '32', '40', '48', '56', '60'],
            datasets: [{
                label: 'Umidade',
                data: [53, 52, 53, 52, 52, 52, 53, 53],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 51, // Define o limite mínimo do eixo y
                max: 55, // Define o limite máximo do eixo y
                ticks: {
                    count: 5, // Defina o número desejado de labels no eixo y
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(35, 35, 35)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(35, 35,35)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  
  // Sexto Gráfico - Umidade
  function renderChart6() {
    var ctx6 = document.getElementById('Umid_Mes').getContext('2d');
    var Temp_Mes = new Chart(ctx6, {
        type: 'line',
        data: {
  
            labels: ['3h', '6h', '9h', '12h', '15h', '18h', '21h', '00h'],
            datasets: [{
                label: 'Umidade',
                data: [52, 52, 53, 52, 53, 52, 53, 52],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 51, // Define o limite mínimo do eixo y
                max: 55, // Define o limite máximo do eixo y
                ticks: {
                    count: 5, // Defina o número desejado de labels no eixo y
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(35, 35, 35)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(35, 35,35)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
