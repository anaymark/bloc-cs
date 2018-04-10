# What is time complexity and what is its relation to algorithms?
>Time complexity is a function that estimates the time it takes for the algorithm to execute relative to input growth. The assumption of infinite input is used to calculate time complexity of an algorithm. This is empirically calculated through the function of n where n is the number of inputs. This is used to see the relative efficiency of algorithms in a technology agnostic setting where hardware is thought of as a constant. 


# What is runtime?
>Runtime is the physical duration in which the algorithm will execute. It is synonymous with complexity. 

# How is the runtime of an algorithm calculated?
>Order, or Big O notation of n, where n is the number of inputs -> infinity. This is written O(f(n)) or Big Oh of[function] and represents the upper bound of the function as the input approaches infinity. Since we are looking at n approaching infinity, constants can be ignored and the largest term (considering quadratics, logarithmic, exponential, etc.) will dictate the representation. 

# Name the six types of algorithm growth rates we saw in this checkpoint and list them in order of most efficient to least efficient. Now Google another algorithmic growth rate not covered and place it in the correct spot in your list.
## Most efficient
* constant growth rate
* logarithmic growth rate
* linear growth rate
* log-linear growth rate
* quadratic growth rate
* exponential growth rate
* factorial growth rate

## Least Efficient

# Choose one of the algorithmic growth rates from the last question and make a comparison to a real-life situation.
> Factorial growth is interesting since it signifies the brute force approach to a list of items and shortest distance/route. This is examined in the traveling salesman problem where the brute force approach is the exact algorithm. Heuristic approaches do exist to decrease the time complexity, but at the cost of accuracy. This is where the battle between time complexity and exactness can be observed. However, modern heuristics are very close to the optimal solution.

# Determine the time complexity of the following snippet of code. It is commonly known as a linear search.

## O(n) time complexity. The for loop is a 1-1 increase in input to execution.
```
FUNCTION linearSearch(array, target)
 FOR each number in the array (A)
   IF number = target THEN (B)
     RETURN true (C)
   END IF
 END FOR
 RETURN false
END FUNCTION
Determine the time complexity of the following snippet of code.

```

If you get stuck, read through the graphical representation section again.


## O(n^2) time complexity due to a nested for loop. 
```
FUNCTION foo(array)
 FOR each number in the array
   FOR each number in the array
     print "Hello"
   END FOR
 END FOR
END FUNCTION
```


Determine the time complexity of the following snippet of code. It is commonly known as the Fibonacci sequence.

## O(2^n) time complexity for recursion. 

```
FUNCTION fibonacci(number)
 IF number < 1 THEN
   ERROR
 ELSE IF number = 1 or 2 THEN
   RETURN 1
 ELSE
   CALL fibonacci WITH number - 2 RETURNING twoBack
   CALL fibonacci WITH number - 1 RETURNING oneBack
   RETURN twoBack + oneBack
 END IF
END FUNCTION
```
## Out of the code snippets you just saw, which is the most time efficient?
>The linear search is more efficient in theory, since using nested for loops and recursion are costly methods. However, these methods are needed to execute certain functions, so a trade-off exists. 




