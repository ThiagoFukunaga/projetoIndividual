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
fkusuario int,
acertos int,
foreign key (fkusuario) references usuario(id));

truncate table quiz;

select *from quiz;

select *from usuario;
