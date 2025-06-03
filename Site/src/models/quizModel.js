var database = require("../database/config");

function guardarResultado(id, fkquiz, fkusuario, acertos) {
    let comandoSQL = `insert into quiz_usuario(id,fkquiz,fkusuario, acertos)
values(${id},${fkquiz},${fkusuario}, ${acertos})`;
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