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
    gato INT NOT NULL,
    dog INT NOT NULL,
    vencedor INT NOT NULL,
    FOREIGN KEY (gato) REFERENCES pets (id),
    FOREIGN KEY (dog) REFERENCES pets (id),
    FOREIGN KEY (vencedor) REFERENCES pets (id)
);

INSERT INTO pets (nome,gato_dog, fofura, hp, nivel) VALUES ('Coisinho','gato', 15, 22, 3);
INSERT INTO pets (nome,gato_dog, fofura, hp, nivel) VALUES ('Robin','gato', 15, 17, 3);
INSERT INTO pets (nome,gato_dog, fofura, hp, nivel) VALUES ('Azeitona','gato', 20, 18, 3);
INSERT INTO pets (nome,gato_dog, fofura, hp, nivel) VALUES ('Snow','dog', 22, 17, 3);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Siamês', 'gato', 10, 17, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Persa', 'gato', 8, 15, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Maine Coon', 'gato', 9, 20, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Sphynx', 'gato', 7, 12, 1);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Bengal', 'gato', 9, 18, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Ragdoll', 'gato', 8, 16, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Siberiano', 'gato', 7, 14, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('British Shorthair', 'gato', 8, 17, 1);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Scottish Fold', 'gato', 9, 19, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Preto e branco', 'gato', 19, 15, 3);


INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Golden Retriever', 'cachorro', 10, 20, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Labrador', 'cachorro', 9, 18, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Bulldog', 'cachorro', 8, 16, 1);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Poodle', 'cachorro', 7, 15, 1);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('German Shepherd', 'cachorro', 9, 19, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Beagle', 'cachorro', 8, 17, 1);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Boxer', 'cachorro', 7, 16, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Shih Tzu', 'cachorro', 6, 14, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Rottweiler', 'cachorro', 11, 18, 2);
INSERT INTO pets (nome, gato_dog, fofura, hp, nivel) VALUES ('Siberian Husky', 'cachorro', 9, 20, 2);





