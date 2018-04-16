# Given the values table below, what data types do each of these values represent?
 * A Clockwork Orange is a value to a name of a movie, and represents a **string** data type.
 * 42 is a number value and represents an **integer**.
 * 09/02/1945 is a date value and represents **either a string or date data type in that format**.
 * 98.7(float) is a numeric value that either represents an **integer**, **float** or other possible numeric data types based on the language being used. 
 * 15.99(float) is a numeric value that either represents an **integer**, **float** or other possible numeric data types based on the language being used.  

# Explain when a database would be used. Explain when a text file would be used.
> A database is used when the data we are using will be not only retrieved, but also written to (add new data), updated (current data override) or deleted. Databases are used when data storage is required for data manipulation that would prove time costly and error prone without database storage. On the other hand, a text file would be useful to store certain notes or data that does not have a correlation, not a large set and does not need to be constantly searched, updated or deleted. 

# Describe one difference between SQL and other programming languages.
> SQL is not a procedural or functional language, it is purely a declarative language. Simply, this means that we do not concern ourselves with **HOW** the database will find the most efficient way of data retrieval, we focus on **WHAT** we want retrieved and from **WHERE**.

# In your own words, explain how the pieces of a database system fit together at a high level.
> Data that is to be stored is created using the appropriate data types. After this data is created is it stored in binary or other indexing means that are efficient for READ/WRITE purposes of the data set. The data that is stored is stored in a manner that is deemed logical and relative to a complete data set. Once the data is stored, methods of **searching for/through** the data are accessible, as well as ways to **create**, **update** and **delete** the data.

# Explain the meaning of table, row, column, and value.
 * Table-A collection of data that is related and composes some logical relationship to a complete data structure.
 * Row-A complete representation of something that is stored with anywhere from 1 to n characteristics that are defined based on the data structure. 
 * Column-The related characteristics that are individually defined, which together show a pattern or logic to the element being represented as the row. 

# List three data types that can be used in a table.
 * Integer
 * String
 * Object
 * Float

# Given the payments table below, provide a description in English and the results of the following queries:

```
     SELECT date, amount
     FROM payments;
```
### Select the date and amount of payment from payments. 

### Result
| date     | amount  |
| :--------| :-----  | 
| 5/1/2016 | 1500.00 |
| 5/10/2016| 37.00   |
| 5/15/2016| 124.93  |
| 5/23/2016| 54.72   |

```
     SELECT amount
     FROM payments
     WHERE amount > 500;
```
### Select amount of payment from payments where it's larger than 500.

### Results

| amount  |
|:--------| 
| 1500.00 |

```
     SELECT *
     FROM payments
     WHERE payee = "Mega Foods";
```
### Select all payments from payments where the payee is Mega Foods.

### Results

| date     | payee         		  | amount  | memo 			 |
| ---------|:--------------------:| :-----: | --------------:|
| 5/15/2016| Mega Foods		      | 124.93  | Groceries	     |

# Given the users table below, write the following SQL queries and their results:

* Select the email and sign-up date for the user named DeAndre Data.
```
	 SELECT email, sign-up
	 FROM users
	 WHERE name = 'DeAndre Data';
```

* Select the user ID for the user with email 'aleesia.algorithm@uw.edu'.
```
	 SELECT userid
	 FROM users
	 WHERE email = 'aleesia.algorithm@uw.edu';
```

* Select all the columns for the user ID equal to 4.
```
	 SELECT *
	 FROM users
	 WHERE userid = 4;
```


## values

| 	        value     | 
|:------------------- |
| A Clockwork Orange  | 
| 42			      | 
| 09/02/1945		  | 
| 98.7				  | 
| 15.99				  | 

## payments

| date     | payee         		  | amount  | memo 			 |
| ---------|:--------------------:| :-----: | --------------:|
| 5/1/2016 | West Hill Apartments | 1500.00 | Rent  		 |
| 5/10/2016| Best Toy Store	      | 37.00   | Beanie Babies  |
| 5/15/2016| Mega Foods		      | 124.93  | Groceries	     |
| 5/23/2016| Shoes R Cool	      | 54.72   | Athletic shoes |


## users

| userid | name        		    | email			                | signup 	     |
| -------|:--------------------:| :----------------------------:| --------------:|
| 1      | Aleesia Algorithm.   | aleesia.algorithm@uw.edu      | 2014-10-24     |
| 2      | DeAndre Data	        | datad@comcast.net.            | 2008-01-20     |
| 3	     | Chris Collection	    | chris.collection@outlook.com  | 2012-01-20	 |
| 4	     | Brandy Boolean	    | bboolean@nasa.gov.            | 1999-10-15.    |


