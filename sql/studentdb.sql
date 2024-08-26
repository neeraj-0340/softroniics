CREATE DATABASE studentdb;
USE studentdb;
SHOW DATABASES;
SHOW TABLES;

CREATE TABLE students(
  student_id INT PRIMARY KEY,
  firstname VARCHAR(250),
  lastname VARCHAR(250),
  dob DATE,
  gender CHAR,
  major VARCHAR(250)
);

INSERT INTO students VALUES
  (1,'John','Doe','2000-01-15', 'M', 'Computer Science'),
  (2,'Jane','Smith','1999-08-25','F','Electrical Engineering');
 select * from students;
SELECT *FROM students WHERE major = 'computer science';
UPDATE students SET major = 'Information Technology' WHERE StudentID = 1;
DELETE FROM students WHERE student_id = 2;
ALTER TABLE students ADD email VARCHAR(100) NOT NULL;
SELECT firstname, lastname, major FROM Students WHERE date_of_birth > '2000-01-01';
 SELECT firstname , major  FROM students;
 drop table students;
 
 