--Add two tables: items, customers.
CREATE table items (id integer, name text, price integer);
CREATE table customers (id integer, firstname text, lastname text);

--Add the following items to the items table:
--1 - Small Desk – 100 (ie. price)
--2 - Large desk – 300
--3 - Fan – 80
INSERT INTO items (id, name, price)
VALUES (1, 'Small Desk', 100), (2, 'Large desk', 300), (3, 'Fan', 80);

--Add 5 new customers to the customers table:
--1 - Greg - Jones
--2 - Sandra - Jones
--3 - Scott - Scott
--4 - Trevor - Green
--5 - Melanie - Johnson
INSERT INTO customers (id, firstname, lastname)
VALUES (1, 'Greg', 'Jones'), (2, 'Sandra', 'Jones'), (3, 'Scott', 'Scott'), (4, 'Trevor', 'Green'), (5, 'Melanie', 'Johnson');

--Use SQL to fetch the following data from the database:
--All the items.
SELECT * FROM items;
--All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price > 80;
--All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300;
--All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers WHERE lastname = 'Smith';
--All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE lastname = 'Jones';
--All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE firstname != 'Scott';