var quizModel = require("../models/quizModel");

function guardarResultadoQuiz (req, res){
    var acertos = req.body.acertos
    var fkusuario = req.body.fkusuario
    var fkquiz = req.body.fkquiz
    var id = req.body.id
    console.log(req.body)

    quizModel.guardarResultado(id,fkquiz, fkusuario, acertos).then(
        function(resultado){
            res.json(resultado)
    }
).catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao salvawr o quiz! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
)
}

function obterQuiz(req, res){
    quizModel.obterQuiz().then(
        function(resultado){
            res.json(resultado)
    }
).catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao obter o quiz! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
)
}
module.exports = {
    obterQuiz,
        guardarResultadoQuiz
}