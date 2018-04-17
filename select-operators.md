# Write out a generic SELECT statement.
> SELECT <col_1, col_2, col_n>
  FROM table_name_1, table_name_2, table_name_n
  optional: WHERE condition_1 AND/OR/NOT condition_2 AND/OR/NOT condition_n

# Create a fun way to remember the order of operations in a SELECT statement, such as a mnemonic.
> SMALL 
  F**CKING
  WORLD

# Create a pets database. Create a dogs table using this file. From the dogs table with the columns id, name, gender, age, weight, intake_date, breed, and in_foster, write statements to select the following pieces of data.
```
psql -f ./Desktop/dogs.sql pets dangerzone
```

 * Display the name, gender, and age of all dogs that are part Labrador.
    
```
   SELECT name, gender, age FROM dogs WHERE breed LIKE '%labrador%';
```

 * Display the ids of all dogs that are under 1 year old.
```
   SELECT id FROM dogs WHERE age < 1;
```
 * Display the name and age of all dogs that are female and over 35lbs.
```
   SELECT name, age FROM dogs WHERE gender = 'F' AND weight > 35;
```
 * Display all of the information about all dogs that are not Shepherd mixes.
```
   SELECT * FROM dogs WHERE breed NOT LIKE '%shepherd%';
```
 * Display the id, age, weight, and breed of all dogs that are either over 60lbs or Great Danes.
```
   SELECT id, age, weight, breed FROM dogs WHERE weight > 60 OR breed LIKE '%great dane%';
```

>Intake teams typically guess the breed of shelter dogs, so the breed column may have multiple words (for example, "Labrador Collie mix").

# From the cats table below, what pieces of data would be returned from these queries?

 * SELECT name, adoption_date FROM cats;
```
 name   adoption_date
 Mushi    2016-03-22
 Seashell
 Azul   2016-04-17
 Victoire 2016-09-01
 Nala 
```
 * SELECT name, age FROM cats;
```
name    age 
Mushi   1 
Seashell.   7 
Azul    3 
Victoire  7 
Nala    1 
```

# From the cats table, write queries to select the following pieces of data.
 * Display all the information about all of the available cats.
```
  SELECT * FROM cats;
```
 * Choose one cat of each age to show to potential adopters.
```
  SELECT DISTINCT ON (age) name, gender,age  FROM cats;
```
 * Find all of the names of the cats, so you don’t choose duplicate names for new cats.
```
  SELECT name from cats;
```

# List each comparison operator and explain when you would use it. Include a real world example for each.
 * If you can’t list these from memory, do these flashcards until you can!
 
 * Logical operators
  * AND
  * OR 
  * NOT 
 * Comparison operators
  * Less than (<): ex WHERE age < 7;
  * Greater than (>): ex WHERE age > 1;
  * Less than or equal to (<=): ex WHERE age <= 7 (inclusive);
  * Greater than or equal to (>=): ex WHERE age >= 1 (inclusive);
  * Not equal to (!=) ex WHERE age != 7, excludes all with age 7;
  * Equal to (=) ex WHERE age = 7, only includes where age is equal to 7;
  * LIKE ex WHERE name LIKE '%example%', will return all names with example in any part of the name. 


# From the cats table below, what data would be returned from these queries?
```
 * SELECT name FROM cats WHERE gender = ‘F’;
```
name   
----------
Seashell
Nala

```
 * SELECT name FROM cats WHERE age <> 3;
```
 name   
----------
 Mushi
 Seashell
 Victoire
 Nala
```
 * SELECT ID FROM cats WHERE name != ‘Mushi’ AND gender = ‘M’;

```

 id 
----
  3
  4

```
```
id    name    gender  age intake_date adoption_date
00001 Mushi   M   1 2016-01-09  2016-03-22
00002 Seashell  F   7 2016-01-09  
00003 Azul    M   3 2016-01-11  2016-04-17
00004 Victoire  M   7 2016-01-11  2016-09-01
00005 Nala    F   1 2016-01-12
```