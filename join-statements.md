# How do you find data held in two separate data tables?
> Data can be accessed from both tables using a SELECT statement FROM table1 combined with {qualifier} JOIN to table2 statement ON primary key = foreign key or foreign key = primary key. Qualifiers represent different data returns between the tables. It is important to note that JOIN does not create a new table in the database, the view of the shared data is what is presented.

```
SELECT * FROM ...
table1 { [INNER] | { LEFT | RIGHT | FULL } [OUTER] } JOIN table2 ON boolean_expression
table1 { [INNER] | { LEFT | RIGHT | FULL } [OUTER] } JOIN table2 USING ( list of shared columns )
table1 NATURAL { [INNER] | { LEFT | RIGHT | FULL } [OUTER] } JOIN table2

```

# Explain, in your own words, the difference between an INNER JOIN, LEFT OUTER JOIN, and RIGHT OUTER JOIN. Give a real-world example for each.
* INNER JOIN is the default JOIN qualifier and results in data being returns that exists in both tables based on the query.
* LEFT OUTER JOIN will first perform an INNER JOIN and further result in a row being returned for every row that exists in table one, while adding a NULL value to the counterpart that does not exist in table 2. An example is this can represent an inventory item that is discontinued but still has an inventory_id assigned for special order, but has the id changed to a discontinued id(must be created) in a Purchase Order table. Thus this item has a foreign key with no primary key to reflect the same value, and will return a NULL in the JOIN statement query.
* RIGHT OUTER JOIN will first perform an INNER JOIN and furter result in a row being returned for every row that exists in table two, while adding a NULL value to the counterpart that does not exist in table 1. An example of this can represent ordering special holiday items. The items will not have a specialorder_id in the inventory table until a certain season, but will be on the Purchase order table at certain parts of the year when the item is cheaper to aquire. Thus the item will have a primary key in the purchase order table with no foreign key in the current inventory table until a certain time when the item is to be sold.

# Define primary key and foreign key. Give a real-world example for each.
* Primary key is a way to index a table and give an order to the data that is represented in the rows. It is important for keeping some kind of sorting and order to the dataset. All the primary keys should be unique.
* A foreign key is a non-unique key that is included as an attribute on a table that allows for relational queries between tables to occur through the JOIN statement. 
* Foreign keys and Primary keys are used as a link for relational queries between tables and datasets.

# Define aliasing.
> Aliasing is assignig a table name to a variable in a query. This usually consists of one character to enable easier writing and better readability. 

# Change this query so that you are using aliasing:

```
SELECT professor.name, compensation.salary, compensation.vacation_days 
FROM professor 
JOIN compensation ON professor.id = compensation.professor_id;

```

```
SELECT professor.name, compensation.salary,compensation.vacation_days 
FROM professor AS p 
JOIN compensation AS c ON p.id = c.professor_id;

```

# Why would you use a NATURAL JOIN? Give a real-world example.
> NATURAL JOIN finds all the colums that are shared between the tables and returns only the data that is shared between those two tables. This data must be present in both tables with the columns existing in both tables to be returned.

# Build an employees table and a shifts table with appropriate primary and foreign keys. Then, write queries to find the following information:
```
CREATE TABLE employees(id integer, name varchar(50), title varchar(50), shift_id integer);
CREATE TABLE shifts(id integer, hours integer, salary numeric(7,2));
INSERT INTO employees VALUES (1,'Shrek', 'Ogre', 8);
INSERT INTO employees VALUES (2,'Donkey', 'Mule', 9);
INSERT INTO employees VALUES (3,'Dragon', 'Wife', 10);
INSERT INTO shifts VALUES (8,12,1200);
INSERT INTO shifts VALUES (9,16,2400);
INSERT INTO shifts VALUES (10,4,10000);
```

 * List all employees and all shifts.

```
SELECT * FROM employees AS e JOIN shifts AS s ON e.shift_id = s.id;
```

# Given the dogs table, the adoptions table (described below), the adopters table (containing the columns id, first_name, last_name, address, and phone_number), and the volunteers table (cotaining the columns id, name, address, phone_number, available_to_foster, and foster_id), please write queries to retrieve the following information:

```
psql -f ./Desktop/dogs.sql blocExamples dangerzone;

CREATE TABLE adoptions(id integer, adopter_id integer, cat_id integer, dog_id integer, fee numeric(4,2), date date);

CREATE TABLE adopters (id integer, first_name varchar(25), last_name varchar(25), address varchar(75), phone_number bigint);

CREATE TABLE volunteers(id integer, name varchar(50), address varchar(75),phone_number bigint, available_to_foster boolean, foster_id integer);
```

 * Create a list of all volunteers. If the volunteer is fostering a dog, include each dog as well.

```
INSERT INTO volunteers VALUES (1,'Alex','1234 Fake St, Denver CO, 80012',7203212211, false, 10002); 
INSERT INTO volunteers VALUES (2,'Joe','1354 Fake St, Denver CO, 80012',7201112222, false, 10003); 
INSERT INTO volunteers VALUES (3,'Ann','5432 Fake St, Denver CO, 80012',7204445555, false, 10004); 
INSERT INTO volunteers VALUES (4,'Lisa','8765 S. Fake St, Denver CO, 80012',7209998888, false, 10006);
INSERT INTO volunteers VALUES (5,'John','8265 S. Fake St, Denver CO, 80012',7209998888, true, NULL);
INSERT INTO volunteers VALUES (6,'Lassie','9877 S. Fake St, Denver CO, 80012',7206667676, true, NULL);
```

 * List the adopter's name and the pet's name for each animal adopted within the past month to display as a 'Happy Tail' on social media.

```
INSERT INTO adopters VALUES (1, 'Shrek', 'Ogre', '123 Swamp FairyTale',7208832121);
INSERT INTO adopters VALUES (2, 'Donkey', 'Mule', '234 Swamp FairyTale',7209990009);
INSERT INTO adopters VALUES (3, 'Princess', 'Fiona', 'Castle',7200880000);
INSERT INTO adopters VALUES (4, 'No Name', 'No Name','No locations',7221112222);
INSERT INTO adoptions VALUES (1, 1, NULL, 10001,40.10,'2017-07-01');
INSERT INTO adoptions VALUES (2, 2, NULL, 10007,60.20,'2017-07-02');
SELECT dogs.name, adopters.first_name, adopters.last_name 
FROM adoptions 
JOIN dogs ON dogs.id = adoptions.dog_id 
JOIN adopters ON adoptions.adopter_id = adopters.id 
WHERE date BETWEEN '2017-06-28' AND '2017-07-30';
```

 * Create a list of adopters who have not yet chosen a dog to adopt.
```
SELECT * FROM adopters LEFT JOIN adoptions ON adopters.id = adoptions.adopter_id WHERE adoptions.adopter_id IS NULL;
```
 * Display a list of all cats and all dogs not yet adopted.

```
INSERT INTO adoptions VALUES (3, 3, 1,NULL,30.20,'2017-07-02');
INSERT INTO adoptions VALUES (3, 3, 3,NULL,30.20,'2016-04-17');
INSERT INTO adoptions VALUES (4, 3, 4,NULL,30.20,'2016-09-01');
SELECT * 
FROM adoptions 
FULL OUTER JOIN cats ON adoptions.cat_id = cats.id 
FULL OUTER JOIN dogs ON adoptions.dog_id = dogs.id 
WHERE adoptions.adopter_id IS NULL;
```

# Write a query to find the name of the person who adopted Seashell given the tables Cats (depicted below), Adoptions (described below), and Adopters containing columns for id, address, phone number, and name.

```
INSERT INTO adopters VALUES (5, 'Cat Lover', 'Anonymous','No locations',7123450909);
INSERT INTO adoptions VALUES (5, 5, 2,NULL,35.20,'2017-09-01');
UPDATE cats SET adoption_date = '2017-09-01' WHERE name = 'Seashell';
SELECT adopters.first_name, adopters.last_name
FROM adoptions 
JOIN cats ON adoptions.cat_id = cats.id JOIN adopters ON adoptions.adopter_id = adopters.id WHERE cats.name = 'Seashell';
```

 * The dogs table has the columns id, name, gender, age, weight, intake_date, breed, and in_foster.

 * Shelter dogs' breeds are typically guessed by the intake team so the column may have multiple words. i.e., Labrador Collie mix.

 * The cats table contains the columns id, name, gender, age, intake_date, adoption_date.

 * Adoptions table contains the columns id, adopter, cat, dog, fee, date

# Given the tables books (isbn, title, author), transactions (id, checked_out_date, checked_in_date, user_id, isbn), holds (id, isbn, user_id, rank, date), and patrons (id, name, fine_amount), write queries to find the following information:

```
CREATE TABLE books(isbn bigint, title varchar(75), author varchar(50));
CREATE TABLE transactions(id integer, checked_out_date date, checked_in_date date, user_id bigint, isbn bigint);
CREATE TABLE holds(id integer, isbn bigint, user_id bigint, rank integer, date date);
CREATE TABLE patrons(id integer, name varchar(50), fine_amount money);
INSERT INTO books VALUES (9788700631625,'Harry Potter and the Sorcerers Stone','J.K. Rowling');
INSERT INTO books VALUES (9780747538486,'Harry Potter and the Chamber of Secrets','J.K. Rowling');
INSERT INTO books VALUES (9788700631625,'Harry Potter and the Prisoner of Azkaban','J.K. Rowling');
INSERT INTO books VALUES ( 9788700631625,'Harry Potter and the Goblet of Fire','J.K. Rowling');
INSERT INTO patrons VALUES(1,'BLOC DEV 1', 0);
INSERT INTO patrons VALUES(2,'BLOC DEV 2', 0);
INSERT INTO patrons VALUES(3,'BLOC DEV 3', 0);
INSERT INTO patrons VALUES(4,'BLOC DEV 4', 0);
INSERT INTO patrons VALUES(5,'BLOC DEV 5', 0);
INSERT INTO holds VALUES(1, 9788700631625, 1,1,'2018-03-01');
INSERT INTO holds VALUES(2, 9788700631625, 3,2,'2018-03-01');
INSERT INTO holds VALUES(3, 9788700631625, 5,3,'2018-03-01');
INSERT INTO transactions VALUES(1,'2018-02-20',NULL,2,9788700631625);
INSERT INTO transactions VALUES(2,'2018-02-20','2018-03-10',2,9788700631625);

```

 * To discern if the library should buy more copies of a given book, please provide the names and position, in order, of all of the patrons waiting in line for Harry Potter and the Sorcerer's Stone.

```
SELECT DISTINCT patrons.name, holds.rank 
FROM holds 
JOIN patrons ON holds.user_id = patrons.id 
JOIN books ON books.isbn = holds.isbn 
WHERE holds.isbn = 9788700631625;
```

 * Make a list of all book titles and denote whether or not a copy of that book is checked out.

```
SELECT books.title, transactions.checked_out_date, transactions.checked_in_date 
FROM transactions 
JOIN books ON transactions.isbn = books.isbn 
WHERE transactions.checked_in_date IS NULL AND transactions.checked_out_date IS NOT NULL;
```

 * To learn which books take longer to read, the librarians would like you to create a list of total checked out time by book name in the past month.

```
SELECT books.title, transactions.checked_in_date - transactions.checked_out_date 
FROM books 
JOIN transactions ON books.isbn = transactions.isbn 
WHERE transactions.checked_in_date > transactions.checked_out_date;
```

 * To learn which items should be retired, make a list of all books that have not been checked out in the past five years.

```
SELECT books.title 
FROM books 
FULL OUTER JOIN transactions ON books.isbn = transactions.isbn 
WHERE transactions.checked_out_date < '2013-04-18';
```

 * List all of the library patrons. If they have one or more books checked out, list the books with the patrons.

```
SELECT patrons.name, books.title 
FROM transactions 
FULL OUTER JOIN patrons ON transactions.user_id = patrons.id 
FULL OUTER JOIN books ON transactions.isbn = books.isbn 
WHERE transactions.checked_out_date IS NOT NULL;
```



