# Define and compare recursion and iteration.
* Both methods repeat a process to achieve something.
* Recursion, a function that calls itself moving through base cases to repeat the code.
* Iteration is exactly as it sounds; a process repeats for a specified amount of times to achieve something. 
* The key difference is that a recursive function repeats a process by calling upon itself, while iteration utilizes a method within a function to iterate through elements. 

# Name five algorithms that are commonly implemented by recursion.
* Binary search algorithm
* Merge sort algorithm
* Quick sort algorithm
* Factorial operation algorithm
* Fibonacci sequence algorithm
* Breadth-first and depth-first tree/graph transversal algorithms

# When should you use recursion, and when should you avoid recursion? Give examples for each.
>Recursive algorithms should be used instead of iteration when the algorithm can be defined by a combination of sub-results starting with known cases that do not fit the repeats of the code. The perfect example is a factorial function that fits all the criteria: base cases of all numbers less than 0, 0 or 1 and the code that will execute the recursive function. However, this is where iteration can be useful, in many of the recursive algorithms, iterative methods are better for performance since recursion has a very high time complexity. Using recursion can prevent errors and is recommended in cases where an algorithm fits all the criteria for its use.

# Compare the recursive and iterative solutions to the three algorithms from the checkpoint (Factorial, Maximum, and Fibonacci). What is similar, and what is different?
>Factorial: recursive time complexity is O(n^2), while the factorial iterative method time complexity comes it at O(n). The iterative method uses less code to define the base cases for all numbers less than 0, and 0 and 1. The amount of code written is shorter for the recursive implementation, and overall the logic for the recursive implementation just sounds closer to the definition of the factorial. However, the time complexity is better with the iterative implementation.

>Maximum: Again, the time complexity of the recursive function is greater than that of the iterative method to find the maximum. The code in the iterative method is also shorter and reads easier. However, the importance of base cases is ignored with the iterative approach. When the first number is undefined, the recursive method explicitly returns an error message, whereas the iterative method returns an undefined or null if that element is set to null. The base cases are not treated the same in these algorithms and it seems the recursive method has a slight advantage that takes more scenarios into account at the tradeoff of performance. 

>Fibonacci: The recursive function in this case has one of the worst time complexities possible with O(2^N). This is a performance concern that is hard to ignore when the iterative approach has a time complexity O(N). Both of the code is written in a straight forward manner, so the performance issues would dictate what algorithm type would be considered optimal in this case with no other variables. 

# Given a multi-dimensional collection (such as an array) where the number of dimensions is unknown, write a recursive algorithm to count the number of items in the entire collection.

```
FUNCTION numberOfElements(arr, index)
  SET index = 0;
  IF arr at index + 1
    RETURN numberOfElements(arr, index + 1)
  END IF
  ELSE IF index is equal to 0
    RETURN 0
  END ELSE IF
  ELSE
    RETURN index + 1
  END
```


```
function numberOfElements(arr,index){
  var index = index || 0;

  if(array[index+1])
  {
  	return numberOfElements(arr, index + 1);
  }
  else if (index === 0){
    return 0;
  }
  else{
    return index + 1;
  }
};

array = [1,2,3,4,5,6];
numberOfElements(array);
->6
```


# A palindrome is a word or phrase whose spelling is the same either direction (e.g., racecar). Write a recursive algorithm to determine if a given word or phrase is a palindrome.

```
function isPalindrome(str) {
    var strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }
    
    return false;
};

```


# Laura and Xander are going door-to-door around their block looking for their lost cat. Write a recursive algorithm showing one way they can visit every house on their block exactly once.

>The assumption here is that this is not a data structure with multiple terminal nodes. 

```

function findHouse(firstHouse, nextHouse)
    IF nextHouse is null 
        RETURN null
    END IF
    IF nextHouse matches firstHouse
        return nextHouse    
    END IF
    RETURN findHouse(firstHouse, nextHouse.next)
END

```

```
function findHouse(firstHouse, nextHouse){
  if(nextHouse == null){
    return null;
  }
  if(nextHouse === firstHouse){
    return nextHouse;
  }
  return findHouse (firstHouse, nextHouse.next)
}

```
