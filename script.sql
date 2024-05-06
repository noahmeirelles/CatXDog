CREATE DATABASE gatoxdog;

CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    gato_dog VARCHAR(100) NOT NULL,
    fofura INT NOT NULL,
    hp INT NOT NULL,
    nivel INT NOT NULL
);
    
CREATE TABLE fight(
    id SERIAL PRIMARY KEY,
    );

INSERT INTO pets (nome,gato_dog, fofura, hp, nivel) VALUES ('Coisinho','gato', 10, 17, 3);