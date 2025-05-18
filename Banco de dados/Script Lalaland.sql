create database lalaland;

use lalaland;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table quiz(
id int primary key auto_increment,
fkusuario int,
acertos int,
foreign key (fkusuario) references quiz(id));

create table avaliacao(
id int primary key auto_increment,
fkusuario int,
descricao varchar(400),
foreign key (fkusuario) references quiz(id));