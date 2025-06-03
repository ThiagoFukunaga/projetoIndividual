var database = require("../database/config");

function buscandoResultado(fkusuario) {
    let comandoSQL = `select acertos from quiz_usuario where fkusuario = ${fkusuario}`;
    return database.executar(comandoSQL)

}

function buscarAcertosTotal(){
    let comandoSQL = `select round(avg(acertos),2) as 'media_acertos' from quiz_usuario`
    return database.executar(comandoSQL)
}
module.exports = {
    buscandoResultado,
    buscarAcertosTotal
};