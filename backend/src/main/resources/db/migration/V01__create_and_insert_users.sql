CREATE TABLE users (
    id  bigserial not null,
    name varchar(255),
    password varchar(255),
    email varchar(255),
    created_at TIMESTAMP WITHOUT TIME ZONE,
    updated_at TIMESTAMP WITHOUT TIME ZONE,
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

INSERT INTO users (name, email, password, created_at) VALUES ('Operator', 'jptick@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG',NOW());
INSERT INTO users (name, email, password, created_at) VALUES ('Admin', 'admin@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG',NOW());
INSERT INTO users VALUES
(3,'João Paulo','12345678','jptick@gmail.com',NULL,'2016-01-31'),
(4,'João Paulo Lima','$2y$10$jRucSRzTx4RgJW25SJBpUuQei09nuUcTxwXsSmJIyIQU6zIGRpzLO','jp@gmail.com','2016-01-27','2016-04-30'),
(5,'Professora Michele','$2y$10$HBRlm6UBpVINFvWK6Lv5y.2He7st51Co407b2xAqsj9b70tiusJ9u','michelleprofessora@gmail.com','2016-02-13','2016-03-16'),
(6,'Jean Lima','$2y$10$/i4YEeqyFxgUJhZy88089eaq2rubwHVFgKz5MZFjhVwpsm5tdIYUa','jeanlima2@gmail.com','2016-02-13','2016-02-13'),
(7,'Danielle Brito de Arruda Oliveira','$2y$10$iD1IWo9360HPIY.shyedwuycNeILofKu5d5PCjH9EHdtncWgZJm/m','daniellebsa@yahoo.com.br','2016-05-10','2016-05-10'),
(8,'Ana Carolina Moreira da Nóbrega','$2y$10$1keLcxMtDSEZyh.cEo/ndenuOTMHUjhmbTJ/6UWpSkmmpn0byHsy2','carolinamoreira.n@gmail.com','2016-05-10','2016-05-10'),
(9,'Daniela Franco Batista','$2y$10$eNG.WePJN9OgcftxCsdeb.sNitwQ3CvFAR4oCgyU.FrfUBXYQT3q6','dannielafranco@gmail.com','2016-05-10','2016-05-10'),
(10,'Sthéfanie Mamede Ribeiro','$2y$10$vfTgMJIElUuq0InpnMpwFuzdB8XhmHCVE7/HtmSV.28Fwh2DQwpvu','stef.mribeiro@gmail.com','2016-05-10','2016-05-20'),
(11,'Amanda Gabriela Duarte Prudencio','$2y$10$yafsJ46Guy4FIoiJ6og75eo6z9/LTxhBRaV9ksUY9cXwKVer9PqzC','amandaprudencio@yahoo.com','2016-05-10','2016-05-10'),
(12,'Rodrigo Pereira de Sousa  ','$2y$10$JM0upzvyn9JdjwlciVhF3et28cGACn7A2h9H3IWt4trycNi3PhTAW','rodrigopereira.unb@gmail.com','2016-05-10','2016-05-10'),
(13,'Jaqueline','$2y$10$pBcjHTaHKgirWE/Tv2a4n.XG.WJ06tBBlP.Yiev1tJ67B4sGQ6SEi','jaquesuzamar@gmail.com','2016-08-11','2016-08-11'),
(14,'Thais ','$2y$10$pfzbOJhHekzfbrpkpXZmkefnbsj7lcnx9txluK.21yYaeO9j1s5XG','thaisdeom@hotmail.com','2016-08-11','2016-08-11'),
(15,'Cristiany','$2y$10$d3nagQkL8jw3ZRcJYuZ4ZuNxyQG69o/xq2.KmlnpvXovPgsXSvBSS','cris.forever14@hotmail.com','2016-08-11','2016-08-11'),
(16,'Mônica Guimarães','$2y$10$5d602huhQYnduf2xTcJ1WemCY4lTTX.5dw03rx/Cyg1mlednoARuS','moniicaguimaraes@gmail.com','2016-08-11','2016-08-11'),
(17,'João Vinicius','$2y$10$o49mIwbN7HwTeY1qmIMFjey7OELJV3s0MYJ1AmOZWxvKBq8CPh8DK','j.vini100@gmail.com','2018-01-10','2018-01-10');
INSERT INTO role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO user_role (user_id, role_id) VALUES (2, 2);