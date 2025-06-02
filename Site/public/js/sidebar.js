function showContent() {

    if (document.getElementById("sidebarGrow").style.width != '100%') {

        document.getElementById("sidebarGrow").style.width = '100%'            
        document.getElementById("showSide").src = ""
    } else {

        document.getElementById("sidebarGrow").style.width = '0%'
        document.getElementById("showSide").src = 'assets/imgs/menu.svg'
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