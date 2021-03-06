CREATE TABLE movies (
    id  bigserial not null,
    title varchar(255) not null,
    subTitle varchar(255),
    year int8,
    imgUrl varchar(255),
    synopsis TEXT,
    genre_id int,
    primary key (id)
);

INSERT INTO movies (title, subTitle, year, imgUrl, synopsis, genre_id) VALUES
('Parasita','Parasite',2019,'https://www.reservacultural.com.br/wp-content/uploads/2019/10/Parasita.jpg',
'Ki-Woo (Choi Woo-sik) é convencido pelo amigo a substituí-lo temporariamente no cargo de professor particular da jovem Da-hye (Jung Ji-so). Ao chegar na casa da menina, ele vê que se trata de uma família muito rica, comandada pela supercontroladora Yeon-Kyo (Jo Yeo-jeong), esposa de um importante empresário. Ao lado dos pais (Song Kang-ho e Jang Hye-jin) e da irmã (Park So-dam), com quem vive em péssimas condições, Ki-Woo arma um plano perfeito para que todos consigam emprego na mansão. Mesmo assim, a trama que parecia sem erros fica comprometida quando imprevistos começam a acontecer. Vencedor de 4 Oscars, incluindo o de Melhor Filme e o de Melhor Filme Estrangeiro.',
11);



