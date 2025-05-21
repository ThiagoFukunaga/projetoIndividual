// const { application } = require("express")

const questoes = [
    {
        questao: "Qual o maior animal do mundo?",
        resposta: [
            { id: 1, text: "Tubarao", correto: false },
            { id: 2, text: "Balei azul", correto: true },
            { id: 3, text: "Elefante", correto: false },
            { id: 4, text: "Girafa", correto: false },
        ]
    },

    {
        questao: "1?",
        resposta: [
            { id: 1, text: "Tubarao", correto: false },
            { id: 2, text: "Balei azul", correto: true },
            { id: 3, text: "Elefante", correto: false },
            { id: 4, text: "Girafa", correto: false },
        ]
    },

    {
        questao: "2",
        resposta: [
            { id: 1, text: "Tubarao", correto: false },
            { id: 2, text: "Balei azul", correto: true },
            { id: 3, text: "Elefante", correto: false },
            { id: 4, text: "Girafa", correto: false },
        ]
    },

    {
        questao: "3?",
        resposta: [
            { id: 1, text: "Tubarao", correto: false },
            { id: 2, text: "Balei azul", correto: true },
            { id: 3, text: "Elefante", correto: false },
            { id: 4, text: "Girafa", correto: false },
        ]
    },

    {
        questao: "4",
        resposta: [
            { id: 1, text: "Tubarao", correto: false },
            { id: 2, text: "Balei azul", correto: true },
            { id: 3, text: "Elefante", correto: false },
            { id: 4, text: "Girafa", correto: false },
        ]
    },

    {
        questao: "5",
        resposta: [
            { id: 1, text: "Tubarao", correto: false },
            { id: 2, text: "Balei azul", correto: true },
            { id: 3, text: "Elefante", correto: false },
            { id: 4, text: "Girafa", correto: false },
        ]
    },
]

const questaoElement = document.getElementById("questoes")
const botaoResposta = document.getElementById("botao-resposta")
const botaoProximo = document.getElementById("proximo")

let questaoAtualIndex = 0
let ponto = 0

function comecar() {
    questaoAtualIndex = 0
    ponto = 0
    botaoProximo.innerHTML = "Próxima";
    mostrarQuestao();
}

function resetState() {
    botaoProximo.style.display = "none"
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild)
    }
}


function mostrarQuestao() {
    resetState();

    let questaoAtual = questoes[questaoAtualIndex]
    let questaoNo = questaoAtual + 1
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

    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.id == respostaCorreta.id

    if (isCorrect) {
        selectedBtn.classList.add("correto")
        ponto++
    } else {
        selectedBtn.classList.add("incorreto")
    }
    Array.from(botaoResposta.children).forEach((button) => {
        button.disabled = true
    })
    botaoProximo.style.display = "block"
}

botaoProximo.addEventListener("click", () => {
    if (questaoAtualIndex < questoes.length) {
        handleNextButton()
    } else {
        comecar()
    }
})

function handleNextButton() {
    questaoAtualIndex++
    if (questaoAtualIndex < questoes.length) {
        mostrarQuestao()
    } else {
        showScore()
    }
}

function showScore() {
    resetState()
    questaoElement.innerHTML = `Você acertou ${ponto} de ${questoes.length}`
    botaoProximo.innerHTML = "Jogar novamente"
    botaoProximo.style.display = "block"
    sendData()
}

function sendData() {
    fetch("/quiz/guardarQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            acertos: ponto,
            fkusuario: sessionStorage.getItem("ID_USUARIO")   
        })
    }).then(
        function(resultado){
            console.log(resultado)
        }
    )
}


comecar();

