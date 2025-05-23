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
module.exports = {
    buscarAcertos
}