# List the commands for adding, updating, and deleting data.
 * CREATE 
 * INSERT INTO
 * UPDATE
 * DELETE
 * ALTER TABLE
 * DROP TABLE

# Explain the structure for each type of command.
 * CREATE Structure:
   CREATE TABLE name (
     data_1 data_type,
     data_2 data_type,
     data_n data_type
   );

 * INSERT INTO table_name (data_1, data_2, data_n)
   (data_1_a, data_2_a, data_n_a),
   (data_1_b, data_2_b, data_n_b),
   (data_1_c, data_2_c, data_n_c);

 * UPDATE table_name SET data_1 = example_value, data_2 = example_value_2, data_n = example_value_n WHERE data_(0->n-1) = example_value_(0->n-1);

 * DELETE FROM table_name WHERE data_n = example_value_n;

 * ALTER TABLE table_name ADD COLUMN data_n data_type SET DEFAULT data_value_n;
   ALTER TABLE table_name DROP COLUMN data_n;

 * DROP TABLE table_name;


#What are some of the data types that can be used in tables? Give a real-world example of each type.

* Numbers:
  * Integer is the common choice for whole numbers, smallint is used when disk space is a premium and bigint is used when range of int is not sufficient. 
  * bigint-range(-9223372036854775808 to +9223372036854775807)
    * ex: bank account numbers, routing numbers, anything tracked per a person or per item with large data set. 
  * decimal-range(up to 131072 digits before the decimal point; up to 16383 digits after the decimal point)
  * double precision-range(15 decimal digits precision)
  * **int**-range(-2147483648 to +2147483647)
    * most commonly used. ex: values of inventory, values of anything that is tracked
  * money-range(-92233720368547758.08 to +92233720368547758.07)
    * used to store monetary values/currency amounts
  * numeric-range(up to 131072 digits before the decimal point; up to 16383 digits after the decimal point)
  * real-range(6 decimal digits precision)
  * serial-range(1 to 2147483647)
  * smallint-range(-32768 to +32767)
  * smallserial-range(1 to 32767)
  * bigserial-range(1 to 9223372036854775807)

* Text
  * largest possible character string that can be stored is 1GB.
  * char-fixed-length(1 byte)-useful for indexing. 
  * name-fixed-length(64 bytes)-object names.
  * character-fixed-length
  * character-varying-variable length limit
  * **text-variable** unlimited length-anything that will have an unpredictable length input. Item descriptions, names of items, etc.
  * varchar-variable length limit

* Date & Time
  * date-any format imaginable exists. 
  * interval-time interval
  * time
  * timestamp-useful for email, text message, anything that can benefit from knowledge of time created/sent/received/updated/etc.

# Decide how to create a new table to hold a list of people invited to a wedding dinner. The table needs to have first and last names, whether they sent in their RSVP, the number of guests they are bringing, and the number of meals (1 for adults and 1/2 for children).

# Which data type would you use to store each of the following pieces of information?
* First and last name-varchar of up to 50 and adjust based on needs. 
* Whether they sent in their RSVP-boolean data type.
* Number of guests-numeric(guestCount) or smallint to save space, no physical event will have more than 32767 guests. For internet group events integer data type.
* Number of meals-depending on the reference to what? Most likely smallint to save space.

* Write a command that creates the table to track the wedding dinner.
```
CREATE TABLE weddingdinner(fullname varchar(50), sentRSVP boolean, guestcount smallint, mealnumber smallint); 
```
* Write a command that adds a column to track whether the guest sent a thank you card.
```
ALTER TABLE weddingdinner ADD COLUMN thankscard boolean;
```

* You have decided to move the data about the meals to another table, so write a command to remove the column storing the number meals from the wedding table.
```
ALTER TABLE weddingdinner DROP COLUMN mealnumber;
```

* The guests will need a place to sit at the reception, so write a statement that adds a column for table number.
```
ALTER TABLE weddingdinner ADD COLUMN tablenumber numeric(3,0);
```

* The wedding is over and we do not need to keep this information, so write a command that deletes the table numbers from the database.
```
DROP TABLE weddingdinner;
```

# Write a command to create a new table to hold the books in a library with the columns ISBN, title, author, genre, publishing date, number of copies, and available copies.
```
CREATE TABLE librarybooks(ISBN bigint, title varchar(50), author varchar(50), genre varchar(50), publishdate date, numberofcopies numeric(9,0),availablecopies numeric(9,0));
```

* Find three books and add their information to the table.
```
INSERT INTO librarybooks VALUES (9780439572897, 'A Wrinkle in Time', 'Madeleine LEngle', 'Science Fiction', January 1,1962, 199999, 10000);
INSERT INTO librarybooks VALUES (9780385754323, 'Wonder', 'RJ Palacio', 'Childrens Novel', 'February 14, 2012', 19, 10);
INSERT INTO librarybooks VALUES (9782266242332, 'Ready Player One', 'Ernest Cline', 'Science Fiction', 'August 16, 2011', 10000000, 10000);
```

* Imagine that someone has just checked out one of the books. Change the number of available copies to 1 less.
```
UPDATE librarybooks SET availablecopies = availablecopies -1 where title = 'Ready Player One'; 
```

* Now one of the books has been added to the banned books list. Remove it from the table.
```
DELETE from librarybooks where title = 'Ready Player One';
```

# Write a command to make a new table to hold spacecrafts. Information should include id, name, year launched, country of origin, a brief description of the mission, orbiting body, if it is currently operating, and its approximate miles from Earth.
```
 CREATE TABLE spacecrafts(id numeric(7,0), name varchar(50), yearlaunched date, countryorigin varchar(20), missiondescription text, orbitingbody varchar(20), operating boolean, milesfromearth int);
```

* Add three non-Earth-orbiting satellites to the table.
```
INSERT INTO spacecrafts (name, orbitingbody) VALUES
('Alpha 1', 'non-Earth-orbiting'), ('Alpha 2', 'non-Earth-orbiting'), ('Alpha 3', 'non-Earth-orbiting');
```

* Remove one of the satellites from the table since it has just crashed into the planet.
```
DELETE FROM spacecrafts where name = 'Alpha 1';
```
* Edit another satellite because it is no longer operating and change the value to reflect that.
```
UPDATE spacecrafts SET operating = true WHERE name = 'Alpha 2';
```

# Write a command to create a new table to hold the emails in your inbox. This table should include an id, the subject line, the sender, any additional recipients, the body of the email, the timestamp, whether or not you have read the email, and the id of the email chain it's in.
```
CREATE TABLE emails(id numeric(12,0), subject varchar(50), sender varchar(50), additionalrecipients varchar(200), body text, timestamp timestamp, read boolean, chainid numeric(6,0));
```
* Add three new emails to the inbox.
```
INSERT INTO emails VALUES (1,'First Email!','BLOC DEV 1','None', 'Hey! First Email in our chain! -Bloc Dev', now(), false, 1);
INSERT INTO emails VALUES (2,'Second Email','BLOC DEV 1','None', 'Hey! Second Email in our chain! -Bloc Dev', now(), false, 1);
INSERT INTO emails VALUES (3,'Holla!','BLOC DEV 3','None', 'Hey! How are you? -Bloc Dev', now(), false, 2);
```

* You deleted one of the emails, so write a command to remove the row from the inbox table.
```
DELETE from emails WHERE subject = 'First Email!' AND sender = 'BLOC DEV 1' AND timestamp = '2018-04-16 23:09:54.648895';
```

* You started reading an email but just heard a crash in another room. Mark the email as unread before investigating the crash, so you can come back and read it later.
```
UPDATE emails SET read = true WHERE sender = 'BLOC DEV 3' AND timestamp = '2018-04-16 23:11:53.353343';
```
