create database studentmark;
show databases;
show tables;
use studentmark;

CREATE TABLE student (
    student_id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    age INTEGER,
    gender CHAR(1),
    address VARCHAR(255)
);

CREATE TABLE marks (
    mark_id INTEGER PRIMARY KEY,
    student_id INTEGER,
    subject VARCHAR(100),
    marks INTEGER,
    FOREIGN KEY (student_id) REFERENCES student(student_id)
);

INSERT INTO student (student_id, name, age, gender, address)
VALUES
    (1, 'uthara', 20, 'F', '123 Elm Street'),
    (2, 'avanthika', 21, 'M', '456 Oak Avenue'),
    (3, 'sana', 22, 'M', '789 Pine Road'),
    (4, 'vismaya', 20, 'F', '321 Maple Lane'),
    (5, 'meethu', 22, 'F', '654 Cedar Boulevard');

INSERT INTO marks (mark_id, student_id, subject, marks)
VALUES
    (1, 1, 'Math', 95),
    (2, 1, 'English', 88),
    (3, 2, 'Math', 72),
    (4, 2, 'Science', 84),
    (5, 3, 'Math', 89),
    (6, 4, 'English', 92),
    (7, 5, 'Science', 77);


ALTER TABLE student
ADD COLUMN date_of_birth DATE DEFAULT NULL;

SELECT name
FROM student
WHERE age = 20 OR student_id IN (
  SELECT student_id
  FROM marks
  WHERE subject = 'Math' AND marks > 90
);


SELECT DISTINCT subject
FROM marks;

SELECT *
FROM student
ORDER BY age ASC, name DESC;

SELECT 
  SUM(marks) AS total_marks,
  AVG(marks) AS average_marks,
  MIN(marks) AS min_marks,
  MAX(marks) AS max_marks
FROM marks
WHERE subject = 'Math';

SELECT student.name, marks.subject, marks.marks
FROM student
INNER JOIN marks ON student.student_id = marks.student_id;

SELECT student.name, marks.subject, marks.marks
FROM student
LEFT JOIN marks ON student.student_id = marks.student_id;

SELECT marks.subject, student.name, marks.marks
FROM marks
RIGHT JOIN student ON marks.student_id = student.student_id;

SELECT name
FROM student
WHERE name LIKE 'A%';

SELECT name
FROM student
WHERE name NOT LIKE '%a%';

SELECT *
FROM student
ORDER BY age DESC
LIMIT 3;

SELECT subject, AVG(marks) AS average_marks
FROM marks
GROUP BY subject
HAVING AVG(marks) > 85;

SELECT *
FROM student
WHERE age BETWEEN 20 AND 22;

SELECT name
FROM student
WHERE name REGEXP '^(A|B)';