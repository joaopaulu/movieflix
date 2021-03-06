CREATE TABLE users (
    id  bigserial not null,
    name varchar(255),
    password varchar(255),
    email varchar(255),
    PRIMARY KEY (id)
);

create table role (
    id  bigserial not null,
    authority varchar(255),
    primary key (id)
);

create table user_role (
    user_id int8 not null,
    role_id int8 not null,
    primary key (user_id, role_id)
);

alter table user_role add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references role;
alter table user_role add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references users;

INSERT INTO users (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO users (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO users (name, email, password) VALUES ('João Paulo', 'jptick@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO role (authority) VALUES ('ROLE_MEMBER');
INSERT INTO role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO user_role (user_id, role_id) VALUES (3, 3);