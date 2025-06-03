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
id int,
fkusuario int,
fkquiz int,
acertos int,
foreign key (fkusuario) references usuario(id),
foreign key (fkquiz) references quiz (id),
primary key (id,fkusuario,fkquiz)
);
