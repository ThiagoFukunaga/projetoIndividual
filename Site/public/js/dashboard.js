function buscarMediaAcertos(){
    fetch(`/dashboard/buscarAcertosMedia/`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkusuario: sessionStorage.getItem("ID_USUARIO")
        })
        }).then(
        function(resultado){
        resultado.json().then(function(json){
            console.log(json)
            document.getElementById("mediaUsuario").innerText = json[0].media_usuario
        })  
                })
        }buscarMediaAcertos()


function obterDadosGrafico() {
    let corDash = null

    if (sessionStorage.getItem("ESTACAO_USUARIO") == "Inverno") {
        corDash = '#00008B'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Outono") {
        corDash = 'rgb(39, 45, 63)'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Primavera") {
        corDash = '#5D2896'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Verão") {
        corDash = '#008000'
    }

    fetch(`/dashboard/buscarAcertos/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkusuario: sessionStorage.getItem("ID_USUARIO")
        })
    }).then(
        function (resultado) {
            console.log(resultado)

            resultado.json().then(
                function (json) {
                    let labels = []
                    let acertos = []

                    console.log(json)

                    for (let i = 0; i < json.length; i++) {
                        labels.push(`Tentativa: ${i + 1}`)
                        acertos.push(json[i].acertos)
                    }
                    const graficoAcerto = document.getElementById("graficoQuiz")

                    new Chart(graficoAcerto, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                    weight: 5,
                                    data: acertos,
                                    borderColor: corDash,
                                    backgroundColor: corDash,
                                    fill: true,
                                    borderRadius: 5,
                                    color: '#fff',
                                }
                            ]
                        },
                        options: {
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        stepSize: 50,
                                        padding: 10
                                    },
                                    grid: {
                                        display: false
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }
                    });
                }
            )

        }
    ).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    })
}obterDadosGrafico()

;


function obterDadosEstacao() {
    let total = 4

    let corDash = null

    if (sessionStorage.getItem("ESTACAO_USUARIO") == "Inverno") {
        corDash = '#00008B'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Outono") {
        corDash = 'rgb(39, 45, 63)'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Primavera") {
        corDash = '#8F00FF'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Verão") {
        corDash = '#008000'
    }

    fetch(`/usuarios/buscandoEstacao/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resultado) {
        console.log(resultado)

        resultado.json().then(
            function (json) {
                let labels = []
                let estacao = []

                console.log(json)

                for (let i = 0; i < json.length; i++) {
                    labels.push(json[i].estacao)
                    estacao.push(json[i].total)
                    console.log()
                }
                const graficoEstacao = document.getElementById("graficoEstacao")

                new Chart(graficoEstacao, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                weight: 5,
                                borderRadius: 5,
                                label: `Estacao`,
                                data: estacao,
                                borderColor: '',
                                backgroundColor: [
                                    '#B3EBF2', // inverno
                                    '#B39EB5', //primavera
                                    '#80EF80', // verao
                                    '#CFCFC4' // outono
                                ],
                                fill: true,
                                color: '#fff',
                                order: 2
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    stepSize: 50,
                                    padding: 10
                                },
                                grid: {
                                    display: false
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                }
                            }
                        }
                    }
                });
            }
        )

    }
    ).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}obterDadosEstacao()

function obterDadosMedia() {
    let corDash = null

    if (sessionStorage.getItem("ESTACAO_USUARIO") == "Inverno") {
        corDash = '#00008B'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Outono") {
        corDash = 'rgb(39, 45, 63)'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Primavera") {
        corDash = '#5D2896'
    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Verão") {
        corDash = '#008000'
    }

    fetch(`/dashboard/buscarAcertosTotal/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(
        function (resultado) {
            console.log(resultado)

            resultado.json().then(
                function (json) {
                    let labels = []
                    let media_acertos = []

                    console.log(json)

                    for (let i = 0; i < json.length; i++) {
                        labels.push(`Média: `)
                        media_acertos.push(json[i].media_acertos)
                    }
                    const graficoAcertoTotal = document.getElementById("graficoQuizMedia")

                    new Chart(graficoAcertoTotal, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                    weight: 5,
                                    data: media_acertos,
                                    borderColor: corDash,
                                    backgroundColor: corDash,
                                    fill: true,
                                    borderRadius: 5,
                                    color: '#fff',
                                }
                            ]
                        },
                        options: {
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        stepSize: 50,
                                        padding: 10
                                    },
                                    grid: {
                                        display: false
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }
                    });
                }
            )

        }
    ).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    })
}obterDadosMedia()

function pegarDados(){
    document.getElementById("estacaoDoUsuario").innerText = sessionStorage.ESTACAO_USUARIO
    document.getElementById("nomeUsuario").innerText = sessionStorage.NOME_USUARIO
}pegarDados()

function mudarCorTexto(){
    const root = document.documentElement;

if (sessionStorage.getItem("ESTACAO_USUARIO") == "Inverno") {
    root.style.setProperty('--corTextokpi', '#9FB7E3');
    root.style.setProperty('--corBG', '#6495ed');
    root.style.setProperty('--corShadow', '#111184');

} else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Outono") {
    root.style.setProperty('--corTextokpi', '#8A8C8D');
    root.style.setProperty('--corBG', '#7c7a8d');
    root.style.setProperty('--corShadow', '#A1A1A1');


} else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Primavera") {
    root.style.setProperty('--corTextokpi', '#5D2896');
    root.style.setProperty('--corBG', '#9295D0');
    root.style.setProperty('--corShadow', '#560591');

} else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Verão") {        
    root.style.setProperty('--corTextokpi', '#186446');
    root.style.setProperty('--corBG', '#9DC183');
    root.style.setProperty('--corShadow', '#2C5F34');

}
}mudarCorTexto()