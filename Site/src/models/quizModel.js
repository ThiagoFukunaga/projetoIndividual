var database = require("../database/config");

function guardarResultado(fkquiz, fkusuario, acertos) {
    let comandoSQL = `insert into quiz_usuario(fkquiz,fkusuario, acertos)
values(${fkquiz},${fkusuario}, ${acertos})`;
    return database.executar(comandoSQL)
}

function obterQuiz(){
    let comandoSQL = `select pq.questao, rp.resposta, rp.correta_falsa
from quiz q
join pergunta_quiz pq on q.id = pq.fkquiz
join resposta_pergunta rp on pq.id = rp.fkpergunta;`;
    return database.executar(comandoSQL)
}


module.exports = {
    obterQuiz,
    guardarResultado }