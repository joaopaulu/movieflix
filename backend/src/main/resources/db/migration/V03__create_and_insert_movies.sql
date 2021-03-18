CREATE TABLE movies (
    id  bigserial not null,
    title varchar(255) not null,
    sub_title varchar(255),
    year int8,
    img_url varchar(255),
    synopsis TEXT,
    genre_id int,
    primary key (id)
);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Parasita','Parasite',2019,'https://www.reservacultural.com.br/wp-content/uploads/2019/10/Parasita.jpg',
'Ki-Woo (Choi Woo-sik) é convencido pelo amigo a substituí-lo temporariamente no cargo de professor particular da jovem Da-hye (Jung Ji-so). Ao chegar na casa da menina, ele vê que se trata de uma família muito rica, comandada pela supercontroladora Yeon-Kyo (Jo Yeo-jeong), esposa de um importante empresário. Ao lado dos pais (Song Kang-ho e Jang Hye-jin) e da irmã (Park So-dam), com quem vive em péssimas condições, Ki-Woo arma um plano perfeito para que todos consigam emprego na mansão. Mesmo assim, a trama que parecia sem erros fica comprometida quando imprevistos começam a acontecer. Vencedor de 4 Oscars, incluindo o de Melhor Filme e o de Melhor Filme Estrangeiro.',
11);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Vingadores','Marvels The Avengers: Os Vingadores',2012,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmkXsIZ89RVeyZkI_v3cLLB4MFd-KlVNXub-M16petJKffpZiw',
'Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.',
1);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Matrix','Desafiando a gravidade e a realidade',1999,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwLB63Bm8WaqqWPmYLi9_wEXXt47qq1UZBSzw05b9NrXlQyN-O',
'Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.',
1);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Deuses do Egito','',2016,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe3H5xCrvawLQVefNjKSjrFKWrIolmEDWayMaEjGNqURreaYRE9oiZ1_DgafwlW9S3dhzHPf5D0-Rx9WVbKLqPiK-10.jpg?r=f3f',
'O deus Hórus perde o controle do Egito para Set, o deus das Trevas, e precisa se unir a um ladrão mortal para restabelecer a ordem e salvar a humanidade',
2);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Ace Ventura 2','Um Maluco na África',1995,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSGVcZH2JrDSMUHdHK9CVMzetySD1n2NH5M7sll3btAqWqbIEYmP8hh4eAorKyftUBeIK-k1hsyvG1_gTLnnGjB_lp0.jpg?r=26a',
'Ace vai à África para recuperar um raro morcego branco. Se ele falhar, a guerra com a violenta tribo dos Wachootoo será inevitável.',
3);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Lara Croft - Tomb Raider','',2001,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABedJDK1_U55MbXVCKajgLKgq-M79oZRHAmyeNtRlyFUGO7bX8b6l_qmvUKoa01W6iH1P6USFxnJsIgPXw0go-0PaU_Y.jpg?r=fbb',
'Baseado no jogo de mesmo nome, este filme de aventura coloca uma aristocrata inglesa treinada em combates em uma batalha com uma sociedade secreta.',
4);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Jurassic World','Reino Ameaçado',2018,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXzxzL3cQ09GzBAXe_RnuH_Eeo4w-x3K7wuEqoVQI064QatmaNwYMnduO9EjmJnANdd_38SeS5sMJ0pbYSALuAnfebU.jpg?r=5ac',
'O cientista Owen Grady e a executiva Claire Dearing correm para salvar uma ilha repleta de dinossauros de um vulcão em erupção.',
5);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('No Coração do Mar','Reino Ameaçado',2015,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc8vHOxKFkge7iRIvvLAiuSgoYlGWrsL75utj1pdhZiTh4Ip09z6UyNG5TCPTdtDhCAHlIiA5bfVQ223TGABTFR08lQ.jpg?r=20c',
'Nesta história real que inspirou Moby Dick, a tripulação de um navio baleeiro luta desesperadamente para sobreviver ao ataque de uma baleia gigante.',
6);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Enola Holmes','Reino Ameaçado',2020,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfAAGF5JxTXSOCa_7s0Ki6iHkGbb4MIdnEBHwW058sSv7IOSQZDg4QPHAqCr5sYoWmJluO74kVoFQ8TtmsAZEsEa2fI9mtlXXLXJTGYysho-cz0fmE8c4oi-PNpg.jpg?r=70d',
'Enola Holmes só tem 16 anos, mas vai fazer de tudo para encontrar a mãe desaparecida, inclusive despistar o irmão Sherlock e ajudar um jovem lorde fugitivo.',
7);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Avatar','O Último Mestre do Ar',2010,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWZIHNj6uYkJFOFR1ONmdqXjWWdMvyVFU3ov6GFXsqqq2qNVqT4swn4PGLh1CioLPPVnuce7oVXVxVnTmPJFqxxcxrk.jpg?r=73b',
'Aang faz uma jornada em que encontra criaturas mágicas e poderosos amigos, mas só ele pode acabar com o antigo conflito entre as quatro nações: Ar, Água, Terra e Fogo.',
8);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('King Kong','O Último Mestre do Ar',2005,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVrta9QthGQh5egbvz0lwkgvUgzHCM4o4BDSy_fzqDsdkTVnLaa5D96q3VaAmBe8SBMaVL38pn9QlyDgm4iyF7foYIA.jpg?r=635',
'Na nova versão do clássico, com direção de Peter Jackson, um grupo de exploradores e uma produtora de cinema partem em busca de um gorila gigante.',
2);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('King Kong','Estrada da Fúria',2005,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVrta9QthGQh5egbvz0lwkgvUgzHCM4o4BDSy_fzqDsdkTVnLaa5D96q3VaAmBe8SBMaVL38pn9QlyDgm4iyF7foYIA.jpg?r=635',
'Na nova versão do clássico, com direção de Peter Jackson, um grupo de exploradores e uma produtora de cinema partem em busca de um gorila gigante.',
2);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Mad Max','Estrada da Fúria',2015,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7LOG223e9Tdcz7bhvjW8uq951fCqxFISgOXCNJT7nAP6raoElv91x2ppLrdauvkAUIEo33-phbZGj6NAnAm5OQPyk.jpg?r=687',
'Max ajuda uma rebelde e um bando de prisioneiras a fugir da tirania, lutar contra ameaças e buscar um lar em uma terra pós-apocalítica.',
1);

INSERT INTO movies (title, sub_title, year, img_url, synopsis, genre_id) VALUES
('Jumanji','Bem-vindo à Selva',2017,'https://occ-0-119-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalfDJVgyA0PabqIS72Rjz-0ck_tBf2kUlVTosnrR7JQeFMRuwh8kWHL6AZescaIcnUoHfbQnALvegB0k3QJSGrrqBc.jpg?r=c4e',
'Quatro estudantes vão parar dentro de um antigo videogame e precisam vencer uma floresta cheia de perigos se não quiserem ficar presos no jogo para sempre.',
2);