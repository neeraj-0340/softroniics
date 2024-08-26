CREATE DATABASE CompanyDB;
USE CompanyDB;

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    HireDate DATE,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

CREATE TABLE Salaries (
    SalaryID INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeID INT,
    SalaryAmount DECIMAL(10, 2),
    SalaryDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

INSERT INTO Departments (DepartmentName) VALUES 
('Human Resources'),
('Engineering'),
('Marketing'),
('Finance'),
('Sales');

INSERT INTO Employees (FirstName, LastName, DepartmentID, HireDate) VALUES
('John', 'Doe', 1, '2018-01-15'),
('Jane', 'Smith', 2, '2017-03-22'),
('Robert', 'Brown', 3, '2016-07-10'),
('Emily', 'Davis', 4, '2019-10-01'),
('Michael', 'Wilson', 5, '2015-12-11');

INSERT INTO Salaries (EmployeeID, SalaryAmount, SalaryDate) VALUES
(1, 60000, '2023-01-01'),
(2, 85000, '2023-01-01'),
(3, 75000, '2023-01-01'),
(4, 70000, '2023-01-01'),
(5, 90000, '2023-01-01');

UPDATE Departments
SET DepartmentName = 'Research and Development'
WHERE DepartmentID = 2;

SELECT Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

SELECT Departments.DepartmentName, AVG(Salaries.SalaryAmount) AS AvgSalary
FROM Employees
JOIN Salaries ON Employees.EmployeeID = Salaries.EmployeeID
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
GROUP BY Departments.DepartmentName;

SELECT Employees.FirstName, Employees.LastName, Salaries.SalaryAmount
FROM Employees
JOIN Salaries ON Employees.EmployeeID = Salaries.EmployeeID
WHERE Salaries.SalaryAmount > (
    SELECT AVG(SalaryAmount) FROM Salaries
);

ALTER TABLE Employees ADD LeaveDate DATE;

UPDATE Employees SET LeaveDate = '2022-12-31' WHERE EmployeeID = 3;

DELETE FROM Salaries
WHERE EmployeeID IN (
    SELECT EmployeeID FROM Employees WHERE LeaveDate IS NOT NULL
);

SELECT Employees.FirstName, Employees.LastName, Salaries.SalaryAmount, Departments.DepartmentName
FROM Employees
JOIN Salaries ON Employees.EmployeeID = Salaries.EmployeeID
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID
WHERE DATEDIFF(CURDATE(), Employees.HireDate) > 5 * 365
AND Salaries.SalaryAmount > (
    SELECT AVG(Salaries.SalaryAmount)
    FROM Salaries
    JOIN Employees E ON Salaries.EmployeeID = E.EmployeeID
    WHERE E.DepartmentID = Employees.DepartmentID
);

