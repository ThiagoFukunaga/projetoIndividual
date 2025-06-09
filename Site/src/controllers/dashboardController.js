var dashboardModel = require("../models/dashboardModel");

function buscarAcertos (req, res){
    var fkusuario = req.body.fkusuario
    
    console.log(req.body)

    dashboardModel.buscandoResultado(fkusuario).then(
        function(resultado){
            res.json(resultado)
    }
).catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao buscar os acertos! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
)
}

function buscarAcertosTotal (req,res){
     

    dashboardModel.buscarAcertosTotal().then(
        function (resultado){
            res.json(resultado)
        }
    )
.catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao buscar a media! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
)
}

function buscarAcertosMedia (req, res){
    var fkusuario = req.body.fkusuario
    
    console.log(req.body)

    dashboardModel.buscarResultadoMedia(fkusuario).then(
        function(resultado){
            res.json(resultado)
    }
).catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao buscar os acertos! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
)
}
module.exports = {
    buscarAcertos,
    buscarAcertosTotal,
    buscarAcertosMedia
}