function mostrarModalAcertos(){
    let modal = document.getElementById("modal")

    modal.style.display = "block"
    document.getElementById("modalAcertos").style.display = "flex"

}

function mostrarModalMedia(){
    let modal = document.getElementById("modal")

    modal.style.display = "block"
    document.getElementById("modalMedia").style.display = "flex"

}

function mostrarModalEstacao(){
    let modal = document.getElementById("modal")

    modal.style.display = "block"
    document.getElementById("modalEstacao").style.display = "flex"

}

function fecharModal(){
    let modal = document.getElementById("modal")

    modal.style.display = "none"
    document.getElementById("modalAcertos").style.display = "none"
    document.getElementById("modalMedia").style.display = "none"
    document.getElementById("modalEstacao").style.display = "none"

    
}