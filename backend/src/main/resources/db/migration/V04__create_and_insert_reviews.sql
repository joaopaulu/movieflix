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
('Good, Good, Good', 1, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 2, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 7, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 8, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 9, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 10, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 11, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 12, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 13, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 14, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 15, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 16, 2);
INSERT INTO reviews (text, movie_id, user_id) VALUES
('Good, Good, Good', 17, 2);




