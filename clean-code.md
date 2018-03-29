# In your own words, explain what clean code is and why it is important.
>Clean code is written in the way that it is easy to follow and read logical patterns. These patterns are grouped by a principle called single concern, which dicates that code should only be assoiated with one responsibility. Moreover, storing code in a function that keeps repeating itself in the codebase is usefull since it can be called on anytime and easier to rewrite if any mistakes/changes are encountered. Keeping you code simple, properly indented, logical and following the principle of single concern will be concidered "clean".

# Read this article about Toyota and their use of bad code. Although you may not yet understand all of the topics discussed, think about another commonly used object that relies on computers and explain what would happen if the code was not created to an acceptable standard.
>A recent example of utilizing code that is not up to acceptable standards is Ubers' self-driving car. A fatal accident involving a pedestrian occured with Ubers Artificial Intelligence engine. Intel decided to look into this matter and looking at the footage from the Uber vehicle and running it through an advanced driver assistant system called Mobileye. The software that Intel utilized was able to detect the pedestrian seconds before impact. Moreover, mobileye is a system that has been tried and tested for over 15 years and used in 27 automakers vehicles. This sheds light into Ubers negligence on such a critical task as autonomous driving. Using best practices and tried and tested techniques in mission critical tasks is not something that is an option, it must be done.


# Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.
```
FUNCTION do(x, y)               // Creating a new function
 IF y = "F" THEN               // Check if y is equal "F"
 SET z to (x−32) * (5/9)       // Formula to convert degrees fahrenheit to celsius
 PRINT z                       // Print result
 ELSE IF y = "C" THEN          // If y not equal to "F", check if equal to "C"
 SET z to x * 1.8000 + 32.00   // Formula to convert degrees celsius to fahrenheit
 PRINT z                       // Print result
 END IF
END FUNCTION
```
>No this is not clean code. First there is no proper indentation, and when cobined with an overabundance of comments, makes the code much harder to read. Moreover, the function name is completely confusing, it just reads 'do', this needs to be changed to a descriptive name.
```
FUNCTION FahrenheitToCelsius(x,y)
  IF y = "F" THEN
    SET z to (x-32) * (5/9)
    PRINT z
  ELSE IF y = "C" THEN
    SET z to x * 1.8000 + 32.00
    PRINT z
  END IF
END FUNCTION
```  

#Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.
```
FUNCTION calcPercent(sum, total)
 IF NOT(total = 0) THEN
    SET percentage to sum / total * 100
 ELSE
  PRINT "Sorry, cannot divide by 0"
 END IF

 PRINT percentage
END FUNCTION
```
>This code is almost clean in indentation. The logic is however not correct since negative numbers can also be an input and it does not parse for string input. This code does however address only one concern/functionality and is simple.
```
FUNCTION calcPercent(sum, total)
  IF NOT(total = 0) THEN
    SET percentage to sum / total * 100
  ELSE
    PRINT "Sorry, cannot divide by 0"
  END IF
    PRINT percentage
END FUNCTION
```

# Using pseudocode, refactor the code for the following examples using the principles you have learned in this checkpoint.

a. The following function prints the subtotal of a customer's transaction and receives payment accordingly.

```
FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
   
   PRINT "Your total due is: " + subTotal * discountRate + (subTotal * tax)

   IF paymentType = 'CASH' THEN
       CALL getPayment RETURNING amount
       PRINT "Change due: " + amount - subTotal * discountRate + (subTotal * tax)
   ELSE IF paymentType = 'CREDIT CARD' THEN
       CALL getPayment RETURNING amount
       PRINT "Your credit card has been charged: " + subTotal * discountRate + (subTotal * tax)
   END IF
END FUNCTION
```
## Refractored:
*Tax isn't defined but it can be just a flat number since it's a variable definition and can be changed later in only one place to alter all the code. 
```
FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
   finalSubTotal = (subTotal * discountRate) + (subTotal * tax)
   
   PRINT "Your total due is: " + finalSubTotal

   IF paymentType = 'CASH' THEN
       CALL getPayment RETURNING amount
       PRINT "Change due: " + amount - finalSubTotal
   ELSE IF paymentType = 'CREDIT CARD' THEN
       CALL getPayment RETURNING amount
       PRINT "Your credit card has been charged: " + finalSubTotal
   END IF
END FUNCTION

```


b. The following function checks out a book if there are no issues with the guest's account.
```
FUNCTION checkoutBook(book, guest)
 IF guest.accountActive THEN
     IF NOT(guest.hasOverdueBooks) THEN
         IF guest.outstandingFees = 0 THEN
           APPEND book to guest.books
           SET book.status to "Checked Out"
           PRINT "Your books have been issued."
         END IF
     END IF
 ELSE
     PRINT "Unable to check out book."
 END IF
END FUNCTION
```
## Refractored:
```
FUNCTION guestFlag(guest)
{
  IF guest.accountActive AND NOT(guest.hasOverdueBooks) AND guest.outstandingFees = 0 THEN
    RETURN TRUE
  END IF
}
FUNCTION checkoutBook(book, guest)
 IF call guestFlaf THEN       
   APPEND book to guest.books
   SET book.status to "Checked Out"
   PRINT "Your books have been issued."
 END IF
 ELSE
   PRINT "Unable to check out book."
 END IF
END FUNCTION
```

c. The following class is a code snippet that should support the transactions a customer can perform at an ATM.

```
CLASS BankAccount

 FUNCTION displayBalance
    PRINT balance
 END FUNCTION

 FUNCTION deposit(amount)
    SET balance to balance + amount
 END FUNCTION

 FUNCTION withdraw(amount)
     IF balance > amount THEN
       SET balance to balance - amount
     END
 END FUNCTION

 FUNCTION creditCardOffer
     IF NOT(customer.hasCreditCard) THEN
         CALL offerCreditCard
     END
 END FUNCTION

 FUNCTION checkStatus
     IF NOT(customer.hasCheckingAccount) THEN
         CALL offerCheckingAccount
     END
 END FUNCTION

 ....
 ....
 ....

END

```
# Refractored:

```
CLASS BankAccount

 FUNCTION displayBalance
    PRINT balance
 END FUNCTION

 FUNCTION deposit(amount)
    SET balance to balance + amount
 END FUNCTION

 FUNCTION withdraw(amount)
     IF balance > amount THEN
       SET balance to balance - amount
     END
 END FUNCTION

END

CLASS CreditCard

 FUNCTION creditCardOffer
     IF NOT(customer.hasCreditCard) THEN
         CALL offerCreditCard
     END
 END FUNCTION

 FUNCTION checkStatus
     IF NOT(customer.hasCheckingAccount) THEN
         CALL offerCheckingAccount
     END
 END FUNCTION

 ....
 ....
 ....

END

```

#Programming Questions
You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

# 6. Square Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

>Example:
[10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
[1,1] returns 2 because 2 is not a perfect square.
The square root of 2 is approximately 1.414213562373095.

```
function getSum(total,num){
  return total + num;
}

function checkPerfectSquare(arr){
  total = arr.reduce(getSum);
  perfectSquareCandidate = Math.sqrt(parseInt(total))
  if(total > 0 && (perfectSquareCandidate % 1 === 0)){
    return perfectSquareCandidate + " because the square root of " +
    total + " is " + perfectSquareCandidate;
    }
  else
    return total + " because " + total + " is not a perfect square."
}
```


# 7. Duplicate Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

```
function isDuplicateNumber(arr){
  for(let i = 0; i<arr.length; i++){
    arr.sort();
    if(arr[i] == arr[i+1]){
      return true;
    }
  }
  return false;
}
```


#Extra Credit 8. Anagram An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. Hint: Your first task will be to convert the strings to arrays.

```
function isAnagram(stringOne, stringTwo){
  stringArray = stringOne.split("");
  reversedArray = stringArray.reverse();
  reversedString = reversedArray.join("");
  if(reversedString.toLowerCase() === stringTwo.toLowerCase()){
    return true;
  }
  else{
    return false
  }
}
```
