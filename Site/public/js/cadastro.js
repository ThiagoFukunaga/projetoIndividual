function cadastrar() {

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    var estacaoSelectVar = select_estacao.value;
    var estacaoFav  = ""

    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "" ||
        estacaoSelectVar == "Selecione"
    ) {
        alert
            ("Preencha todos os campos");
    }else{
        div_resultadoCadastro.innerHTML = `Cadastro feito com sucesso! Redirecionando...`

        setTimeout(function () {
                    window.location = "./login.html"
                }, 1500);
        
    }

    if(estacaoSelectVar == "i"){
        estacaoFav = "Inverno"
    }else if (estacaoSelectVar == "o"){
        estacaoFav = "Outono"
    }else if (estacaoSelectVar == "p"){
        estacaoFav = "Primavera"
    }else if (estacaoSelectVar == "v"){
        estacaoFav = "Verão"
    }


    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            estacaoServer: estacaoFav,
        }),
    })
}
