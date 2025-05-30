var database = require("../database/config");

function buscandoResultado(fkusuario) {
    let comandoSQL = `select acertos from quiz where fkusuario = ${fkusuario}`;
    return database.executar(comandoSQL)

}

module.exports = {
    buscandoResultado
};