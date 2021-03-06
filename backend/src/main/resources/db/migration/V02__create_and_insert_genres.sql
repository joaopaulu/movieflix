CREATE TABLE genres (
    id  bigserial not null,
    name varchar(255),
    primary key (id)
);

INSERT INTO genres (name) VALUES ('Ação');
INSERT INTO genres (name) VALUES ('Aventura');
INSERT INTO genres (name) VALUES ('Comédia');
INSERT INTO genres (name) VALUES ('Dança');
INSERT INTO genres (name) VALUES ('Documentário');
INSERT INTO genres (name) VALUES ('Drama');
INSERT INTO genres (name) VALUES ('Espionagem');
INSERT INTO genres (name) VALUES ('Fantasia');
INSERT INTO genres (name) VALUES ('Musical');
INSERT INTO genres (name) VALUES ('Romance');
INSERT INTO genres (name) VALUES ('Terror');

