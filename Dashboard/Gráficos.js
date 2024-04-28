// Gráficos 

// Renderiza os gráficos quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    renderChart1(); renderChart4();
  });
  
  
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
  function renderChart1() {
    var ctx1 = document.getElementById('Temp_TempoReal').getContext('2d');
    var Temp_TempoReal = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['0', '2', '4', '6', '8'],
            datasets: [{
                label: 'Temperatura',
                data: [-18.5, -18.2, -17.8, -17.3, -17.0],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                color: 'rgb(255, 255, 255)',
            }]
        },
        options: {
        scales: {
            y: {
                min: -20, // Define o limite mínimo do eixo y
                max: -15, // Define o limite máximo do eixo y
                ticks: {
                    callback: function(value, index, values) {
                        return value + '°C'; // Adiciona o símbolo de grau Celsius
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(65, 65, 65)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(65, 65,65)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  // Segundo Gráfico - Temperatura
  function renderChart2() {
    var ctx2 = document.getElementById('Temp_Semana').getContext('2d');
    var Temp_Semana = new Chart(ctx2, {
        type: 'line',
        data: {
  
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7'],
            datasets: [{
                label: 'Temperatura',
                data: [-18.5, -18.2, -17.8, -17.3, -17.0, -17.8, -18.2],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: -20, // Define o limite mínimo do eixo y
                max: -15, // Define o limite máximo do eixo y
                ticks: {
                    callback: function(value, index, values) {
                        return value + '°C'; // Adiciona o símbolo de grau Celsius
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(65, 65, 65)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(65, 65,65)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }
  
  // Terceiro Gráfico - Temperatura
  function renderChart3() {
    var ctx3 = document.getElementById('Temp_Mes').getContext('2d');
    var Temp_Mes = new Chart(ctx3, {
        type: 'line',
        data: {
  
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
            datasets: [{
                label: 'Temperatura',
                data: [-18.7, -18.5, -17.9, -18.3, -18.4, -18.2, -17.9],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: -20, // Define o limite mínimo do eixo y
                max: -15, // Define o limite máximo do eixo y
                ticks: {
                    callback: function(value, index, values) {
                        return value + '°C'; // Adiciona o símbolo de grau Celsius
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(65, 65, 65)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(65, 65,65)', // Cor das linhas de grade do eixo x
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
            labels: ['0', '2', '4', '6', '8'],
            datasets: [{
                label: 'Umidade',
                data: [45, 46, 47, 48, 49],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 44, // Define o limite mínimo do eixo y
                max: 50, // Define o limite máximo do eixo y
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(65, 65, 65)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(65, 65,65)', // Cor das linhas de grade do eixo x
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
  
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7'],
            datasets: [{
                label: 'Umidade',
                data: [45, 46, 47, 48, 49, 48, 50],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 44, // Define o limite mínimo do eixo y
                max: 50, // Define o limite máximo do eixo y
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(65, 65, 65)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(65, 65,65)', // Cor das linhas de grade do eixo x
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
  
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
            datasets: [{
                label: 'Umidade',
                data: [87, 85.5, 87, 86, 90, 89, 88],
                borderColor: 'rgb(0, 195, 255)',
                backgroundcolor: 'rgb(13, 14, 43)',
                lineTension: 0.3
            }]
        },
        options: {
        scales: {
            y: {
                min: 80, // Define o limite mínimo do eixo y
                max: 90, // Define o limite máximo do eixo y
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%'; // Adiciona o símbolo de porcentagem
                    },
            padding: 15 
        },
                grid: {
                    color: 'rgb(65, 65, 65)', // Cor das linhas de grade do eixo y
                }
            },
            x: {
                grid: {
                    color: 'rgb(65, 65,65)', // Cor das linhas de grade do eixo x
                }
            }
        }
    }
  });
  }