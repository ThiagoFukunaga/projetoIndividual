function trocarFundo (event){
    const id = event.target.id;
    const textoHeroi = document.querySelectorAll('.cor');
    console.log(id); 
    if(id == 'outono'){
        bgHeroi.style.backgroundImage = `url(./assets/imgs/outono3.jpg)`;
        for(let i = 0; i < textoHeroi.length; i++){
            textoHeroi[i].style.color = '#FFF' 
        }
    }
    if(id == 'inverno'){
        bgHeroi.style.backgroundImage = `url(./assets/imgs/inverno2.jpg)`;
        for(let i = 0; i < textoHeroi.length; i++){
            textoHeroi[i].style.color = '#000' 
        }
    }
    if(id == 'verao'){
        bgHeroi.style.backgroundImage = `url(./assets/imgs/verao2.jpg)`;
        for(let i = 0; i < textoHeroi.length; i++){
            textoHeroi[i].style.color = '#FFF' 
        }
    }
    if(id == 'primavera'){
        bgHeroi.style.backgroundImage = `url(./assets/imgs/primavera2.jpg)`;
        for(let i = 0; i < textoHeroi.length; i++){
            textoHeroi[i].style.color = '#FFF' 
        }
    }
}