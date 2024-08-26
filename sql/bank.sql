create database bank;
use bank;

CREATE TABLE Loans (
    AccNo INT PRIMARY KEY,
    Cust_Name VARCHAR(100),
    Loan_Amount DECIMAL(10, 2),
    Instalments INT,
    Int_Rate DECIMAL(5, 2),
    Start_Date DATE,
    Interest DECIMAL(10, 2)
);

INSERT INTO Loans (AccNo, Cust_Name, Loan_Amount, Instalments, Int_Rate, Start_Date, Interest) VALUES
(1, 'R.K.Gupta', 300000, 36, 12.00, '2009-07-19', 1200),
(2, 'S.P.Sharma', 500000, 48, 10.00, '2008-03-22', 1800),
(3, 'K.P.Jain', 300000, 36, NULL, '2007-03-08', 1600),
(4, 'M.P.Yadav', 800000, 60, 10.00, '2008-12-06', 2250),
(5, 'S.P.Sinha', 200000, 36, 12.50, '2010-01-03', 4500),
(6, 'P.Sharma', 700000, 60, 12.50, '2008-06-05', 3500),
(7, 'K.S.Dhall', 500000, 48, NULL, '2008-03-05', 3800);

SELECT * FROM Loans;
SELECT AccNo, Cust_Name, Loan_Amount FROM Loans;
SELECT * FROM Loans WHERE Instalments < 40;
SELECT AccNo, Loan_Amount FROM Loans WHERE Start_Date < '2009-04-01';
SELECT Int_Rate FROM Loans WHERE Start_Date > '2009-04-01';
SELECT * FROM Loans WHERE Int_Rate IS NULL;
SELECT * FROM Loans WHERE Int_Rate IS NOT NULL;
SELECT DISTINCT Loan_Amount FROM Loans;
SELECT DISTINCT Instalments FROM Loans;
SELECT * FROM Loans WHERE Start_Date > '2008-12-31' AND Instalments > 36;
SELECT Cust_Name, Loan_Amount FROM Loans WHERE Instalments <> 36;
SELECT Cust_Name, Loan_Amount FROM Loans WHERE Loan_Amount < 500000 OR Int_Rate > 12;
SELECT * FROM Loans WHERE Loan_Amount BETWEEN 400000 AND 500000;
SELECT * FROM Loans WHERE Int_Rate BETWEEN 11.00 AND 12.00;
SELECT Cust_Name, Loan_Amount FROM Loans WHERE Instalments IN (24, 36, 48);
SELECT AccNo, Cust_Name, Loan_Amount FROM Loans WHERE Cust_Name LIKE '%Sharma';
SELECT AccNo, Cust_Name, Loan_Amount FROM Loans WHERE Cust_Name LIKE '%a';
SELECT AccNo, Cust_Name, Loan_Amount FROM Loans WHERE Cust_Name LIKE '%a%';
SELECT AccNo, Cust_Name, Loan_Amount FROM Loans WHERE Cust_Name NOT LIKE '%P%';
SELECT AccNo, Cust_Name, Loan_Amount FROM Loans WHERE Cust_Name LIKE '%a_';
SELECT * FROM Loans ORDER BY Loan_Amount ASC;
SELECT * FROM Loans ORDER BY Start_Date DESC;
UPDATE Loans SET Int_Rate = 11.50 WHERE Int_Rate IS NULL;
UPDATE Loans SET Int_Rate = Int_Rate + 0.5 WHERE Loan_Amount > 400000;
UPDATE Loans SET Interest = (Loan_Amount * Int_Rate * Instalments) / (12 * 100);
DELETE FROM Loans WHERE Cust_Name = 'K.P.Jain';
ALTER TABLE Loans ADD Category CHAR(1);
SELECT SUM(Loan_Amount) FROM Loans WHERE Int_Rate > 10;
SELECT MAX(Interest) FROM Loans;
SELECT COUNT(*) FROM Loans WHERE Cust_Name LIKE '%Sharma';
SELECT COUNT(*) FROM Loans WHERE Interest IS NULL;
SELECT Interest, Cust_Name, Loan_Amount FROM Loans ORDER BY Interest;
SELECT Interest, Cust_Name, Loan_Amount FROM Loans WHERE Instalments >= 10 ORDER BY Interest;
SELECT Interest, COUNT(*) FROM Loans WHERE Instalments > 5 GROUP BY Interest;
