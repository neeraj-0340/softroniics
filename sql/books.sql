create database soft;
use soft;
show databases;
show tables;

create table author (
author_id int primary key auto_increment,
name varchar(50) not null,
country varchar(50) not null
);

create table book (
book_id int primary key auto_increment,
title varchar(50) not null,
author_id int not null,
publication_date int not null,
foreign key (author_id)
references author(author_id)
);

create table users (
user_id int primary key auto_increment,
name varchar (50) not null,
email varchar (255) unique not null,
membership_date date not null
);

CREATE TABLE Loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    loan_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (book_id)
        REFERENCES Books (book_id),
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
);

select * from book;