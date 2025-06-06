// const { application } = require("express")

const questoes = []

const questaoElement = document.getElementById("questoes")
const botaoResposta = document.getElementById("botao-resposta")
const botaoProximo = document.getElementById("proximo")

let questaoAtualIndex = 0
let ponto = 0

function comecar() { 
    questaoAtualIndex = 0
    ponto = 0
    botaoProximo.innerHTML = "Próxima";
    document.getElementById("progress").style.width = "0%"
    document.getElementById("grayscale").style.backdropFilter = "grayscale(100%)" + " blur(14px)"
    mostrarQuestao();
}

function reniciar() {
    botaoProximo.style.display = "none"
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild)
    }
}


function mostrarQuestao() {
    reniciar();

    let questaoAtual = questoes[questaoAtualIndex]
    let questaoNo = questaoAtualIndex + 1
    console.log(questaoAtualIndex)
    questaoElement.innerHTML = questaoNo + ". " + questaoAtual.questao

    questaoAtual.resposta.forEach((resposta) => {
        const button = document.createElement("button")
        button.innerHTML = resposta.text
        button.dataset.id = resposta.id
        button.classList.add("resposta")
        button.addEventListener("click", selecionarResposta)
        botaoResposta.appendChild(button)
    })
}

function selecionarResposta(e) {
    resposta = questoes[questaoAtualIndex].resposta
    const respostaCorreta = resposta.filter((resposta) => resposta.correto == true)[0]

    const botaoSelecionado = e.target
    const estaCerto = botaoSelecionado.dataset.id == respostaCorreta.id

    if (estaCerto) {
        botaoSelecionado.classList.add("correto")
        ponto++
        document.getElementById("grayscale").style.backdropFilter = "grayscale(" + (100 - (ponto / questoes.length) * 100) + "%)" + " blur(" + (8 - (ponto / questoes.length) * 8) + "px)"
    } else {
        botaoSelecionado.classList.add("incorreto")
    }
    Array.from(botaoResposta.children).forEach((button) => {
        button.disabled = true
    })
    botaoProximo.style.display = "block"
}

botaoProximo.addEventListener("click", () => {
    if (questaoAtualIndex < questoes.length) {
        proximoBotao()
    } else {
        comecar()
    }
})

function proximoBotao() {
    questaoAtualIndex++
    document.getElementById("progress").style.width = (questaoAtualIndex / questoes.length) * 100 + "%"

    if (questaoAtualIndex < questoes.length) {
        mostrarQuestao()
    } else {
        mostrarPontuacao()

    }
}

function mostrarPontuacao() {
    reniciar()
    questaoElement.innerHTML = `Você acertou ${ponto} de ${questoes.length}`
    botaoProximo.innerHTML = "Jogar novamente"
    botaoProximo.style.display = "block"
    mandarDados()
}

function mandarDados() {
    fetch("/quiz/guardarQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            acertos: ponto,
            fkusuario: sessionStorage.getItem("ID_USUARIO"),
            fkquiz: 1
        })
    }).then(
        function (resultado) {
            console.log(resultado)
        }
    )
}

function obterQuiz() {
    fetch("/quiz/obterQuiz", {
    }).then(
        
        function (resultado) {
            console.log(resultado)
            resultado.json().then(function (array) {
                console.log(array)


                let contador = -1
                let contadorAlternativa = 0

                for (let i = 0; i < array.length; i++) {
                    if (i % 4 == 0) {
                        contadorAlternativa = 1
                        
                        contador++

                        questoes.push({
                            questao: array[i].questao,
                            resposta: [
                                {
                                    id:contadorAlternativa,
                                    text: array[i].resposta,
                                    correto: array[i].correta_falsa
                                }
                            ]
                        })
                    } else {
                        contadorAlternativa++
                        questoes[contador].resposta.push({id:contadorAlternativa,
                            text:array[i].resposta,
                            correto: array[i].correta_falsa
                        })
                    }
                } comecar() 

            })
        }
    )
}
obterQuiz()

function mudarTema() {
    const root = document.documentElement;

    if (sessionStorage.getItem("ESTACAO_USUARIO") == "Inverno") {
        root.style.setProperty('--imagemFundo', 'url("../imgs/inverno3.jpg")');
        root.style.setProperty('--corCorreto', '#8DCFEC');
        root.style.setProperty('--corProgress', '#B2CAFF');
        root.style.setProperty('--corTema', '#03045E');

    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Outono") {
        root.style.setProperty('--imagemFundo', 'url("../imgs/outono4.jpg")')
        root.style.setProperty('--corCorreto', '#CCDBD9');
        root.style.setProperty('--corProgress', '#889E9D');
        root.style.setProperty('--corTema', '#AAB5B8');


    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Primavera") {
        root.style.setProperty('--imagemFundo', 'url("../imgs/primavera3.jpg")')
        root.style.setProperty('--corCorreto', '#C3B1E6');
        root.style.setProperty('--corProgress', '#8F6CF0');
        root.style.setProperty('--corTema', '#341E60');

    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Verão") {
        root.style.setProperty('--imagemFundo', 'url("../imgs/verao3.jpg")')
        root.style.setProperty('--corCorreto', '#AED581');
        root.style.setProperty('--corProgress', '#7CB342');
        root.style.setProperty('--corTema', '#33691E');
    }
}
