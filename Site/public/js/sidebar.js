function mostrarConteudo() {

    if (document.getElementById("crescerSide").style.width != '100%') {

        document.getElementById("crescerSide").style.width = '100%'            
        document.getElementById("mostrarSide").src = ""
    } else {

        document.getElementById("crescerSide").style.width = '0%'
        document.getElementById("mostrarSide").src = 'assets/imgs/menu.svg'
    }
}

function redirecionarQuiz(){
    window.location = "./musicas.html"
}
function redirecionarDash(){
    window.location = "./dash.html"
}
function redirecionarInicio(){
    window.location = "./logado.html"
}