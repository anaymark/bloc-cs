
# Why do programmers use pseudocode?
>Programmers use pseudocode to provide an outline for algorithms that are language agnostic and very simple to read. 

# If you run pseudocode on your computer what would happen?
>The code would not run and most likely throw a heap of errors, depending on what language you are using.


# Programming Assignment
* Write the following algorithms in pseudocode:

## Create a function that takes two numbers and prints out the greater number.

```
FUNCTION printLargerNumber(numOne, numTwo)

  IF numOne < numTwo THEN
    PRINT numTwo
  ELSE 
    PRINT numOne
  END IF

END FUNCTION

```

## Create a function that prints out the numbers from 1 to 100.

```
FUNCTION printOneToHundred()
  SET number to 100

  WHILE num > 0 
    PRINT num
  ENDWHILE

ENDFUNCTION

```

## Create a function that searches for a specific entry in a phonebook. 

* We don't know if this entry will be stored in an object or array, and what language will be checking, thus we will keep this broad.

```
FUNCTION doesEntryExist(entry,phonebook)
  FOR every ITEM in phonebook 
    IF entry EXISTS in phonebook
      RETURN true
    ELSE
      RETURN false
  ENDFOR
END FUNCTION
```

## Using the pseudocode you wrote for the previous question, implement it in any computer language of your choice.

* Search functionality by name only. 

function doesEntryExist(entryName, phoneBook){
  if(typeof entryName === "string"){
    for(let i = 0; i < phoneBook.length; i++){
      if(phoneBook[i].name.toLowerCase() == entryName.toLowerCase()){
        return phoneBook[i];
      }
  }
    return "No entry exists with the criteria, please try again."; 
  }
  else{
    return "Please enter a valid name using Alphabet letters.";
  }
}

