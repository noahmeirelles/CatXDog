CREATE DATABASE aulabacktds2;

CREATE TABLE gatos(
    id SERIAL PRIMARY KEY,
    nomeG VARCHAR(100) NOT NULL,
    fofuraG VARCHAR(100) NOT NULL,
    hpG VARCHAR(100) NOT NULL,
    nivelG VARCHAR(100) NOT NULL
);

CREATE TABLE cachorros(
    id SERIAL PRIMARY KEY,
    nomeC VARCHAR(100) NOT NULL,
    fofuraC VARCHAR(100) NOT NULL,
    hpC VARCHAR(100) NOT NULL,
    nivelC VARCHAR(100) NOT NULL
    );
    
CREATE TABLE fight(
    id SERIAL PRIMARY KEY,
    );

INSERT INTO usuarios (nome,sobrenome, datadenascimento, email, idade, signo) VALUES ('noah', 'Meirelles','20-02-2007', 'noah@gmail.com',17, 'peixes');