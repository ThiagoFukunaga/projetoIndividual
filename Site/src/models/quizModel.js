var database = require("../database/config");

function guardarResultado(fkusuario, acertos) {
    let comandoSQL = `insert into quiz(fkusuario, acertos)
values(${fkusuario}, ${acertos})`;
    return database.executar(comandoSQL)

}
module.exports = { guardarResultado }