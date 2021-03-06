CREATE TABLE reviews (
    id  bigserial not null,
    text TEXT not null,
    movie_id int8 not null,
    user_id int8 not null,
    primary key (id)
);

alter table reviews add constraint FK5r4sbavb4nkd9xpl0f095qs2a foreign key (movie_id) references movies;
alter table reviews add constraint FKgbof0jclmaf8wn2alsoexxq3u foreign key (user_id) references users;

INSERT INTO reviews (text, movie_id, user_id) VALUES
('Teste', 1, 1);



