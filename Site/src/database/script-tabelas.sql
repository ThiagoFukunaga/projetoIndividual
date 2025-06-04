-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/


create database lalaland;

use lalaland;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	estacao VARCHAR(9),
	constraint chkEstacao check (estacao in ("Inverno", "Outono", "Primavera", "Verão"))
);



create table quiz(
id int primary key auto_increment,
descricao varchar(50)
);

create table pergunta_quiz(
id int,
fkquiz int,
questao varchar(200),
foreign key(fkquiz) references quiz(id),
primary key(id,fkquiz)
);

create table resposta_pergunta(
id int primary key auto_increment,
resposta varchar(50),
correta_falsa boolean not null,
fkpergunta int,
fkquiz int,
foreign key (fkpergunta, fkquiz) references pergunta_quiz(id,fkquiz)
);


create table quiz_usuario(
id int AUTO_INCREMENT,
fkusuario int,
fkquiz int,
acertos int,
foreign key (fkusuario) references usuario(id),
foreign key (fkquiz) references quiz (id),
primary key (id,fkusuario,fkquiz)
);

-- Inserindo quiz
INSERT INTO quiz (descricao) VALUES ('Quiz sobre La La Land');

-- Inserindo perguntas
INSERT INTO pergunta_quiz (id, fkquiz, questao) VALUES
(1, 1, 'Quem são os protagonistas do filme "La La Land"?'),
(2, 1, 'Qual é o tema principal do filme "La La Land"?'),
(3, 1, 'Qual prêmio "La La Land" ganhou no Oscar de 2017?'),
(4, 1, 'Qual é o nome do clube de jazz que Sebastian sonha em abrir?'),
(5, 1, 'Qual música de "La La Land" ganhou o Oscar de Melhor Canção Original?');

-- Inserindo respostas
INSERT INTO resposta_pergunta (resposta, correta_falsa, fkpergunta, fkquiz) VALUES
('Ryan Gosling e Emma Stone', TRUE, 1, 1),
('Leonardo DiCaprio e Kate Winslet', FALSE, 1, 1),
('Brad Pitt e Angelina Jolie', FALSE, 1, 1),
('Chris Hemsworth e Natalie Portman', FALSE, 1, 1),

('A busca pelo amor e pelos sonhos', TRUE, 2, 1),
('Uma investigação policial', FALSE, 2, 1),
('A luta contra alienígenas', FALSE, 2, 1),
('Um apocalipse zumbi', FALSE, 2, 1),

('Melhor Diretor', TRUE, 3, 1),
('Melhor Filme', FALSE, 3, 1),
('Melhor Ator', FALSE, 3, 1),
('Melhor Roteiro Adaptado', FALSE, 3, 1),

('Seb''s', TRUE, 4, 1),
('Jazz Paradise', FALSE, 4, 1),
('Dreamland', FALSE, 4, 1),
('Blue Note', FALSE, 4, 1),

('City of Stars', TRUE, 5, 1),
('Another Day of Sun', FALSE, 5, 1),
('Audition (The Fools Who Dream)', FALSE, 5, 1),
('Someone in the Crowd', FALSE, 5, 1);