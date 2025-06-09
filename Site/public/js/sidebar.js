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
    window.location = "./quiz.html"
}
function redirecionarDash(){
    window.location = "./dash.html"
}
function redirecionarInicio(){
    window.location = "./index.html"
}

function mudarTemaSide() {
    const root = document.documentElement;

    if (sessionStorage.getItem("ESTACAO_USUARIO") == "Inverno") {
        root.style.setProperty('--corSide', '#b2caffba');
        root.style.setProperty('--corSideSec', '#CCDBD9');
        root.style.setProperty('--corPrincipal', '#B2CAFF');

    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Outono") {
        root.style.setProperty('--corSide', '#aab5b86d');
        root.style.setProperty('--corSideSec', '#CCDBD9');
        root.style.setProperty('--corPrincipal', '#AAB5B8');


    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Primavera") {
        root.style.setProperty('--corSide', '#c3b1e674');
        root.style.setProperty('--corSideSec', '#8F6CF0');
        root.style.setProperty('--corPrincipal', '#C3B1E6');

    } else if (sessionStorage.getItem("ESTACAO_USUARIO") == "Verão") {
        
        root.style.setProperty('--corSide', '#7cb3426f');
        root.style.setProperty('--corSideSec', '#33691E');
        root.style.setProperty('--corPrincipal', '#7CB342');
    }

}mudarTemaSide()
