# What is a real-life scenario that uses linear search?
>A linear search is defined by iterating linearly over a collection or set, to find the item that is being searched for. This works on sorted as well as unsorted data. An example of this is looking through a contact book or recipe booklet. Neither of these have to be sorted in any specific order and looking for a target element is done one iteration at a time in a linear manner. This is done until the target element is found.

# What is a real-life scenario that uses binary search?
>A binary search algorithm us defined by divide and conquer methodology. The data set must be sorted for the algorithm to properly function. A perfect example of this is getting a book from a library or getting an item from any organized store. Our target element is the book. We look at the total number of racks, finding the middle rack. We look to see what the alphabet of name or author is at the middle rack, and eliminate half based on simply comparing our target element to the element at the mid-rack. We continue this method until we find the book or run out of racks. 

# Given the alphabetically sorted collection in this checkpoint, how many iterations would it take to find the value G using linear search?
>G would be the 6th index in an alphabetically sorted array, thus it would take 7 iterations to reach the value G in a linear search.


# Given the alphabetically sorted collection in this checkpoint, how many iterations would it take to find the value G using binary search?
>Again G would be the 6th index in an alphabetically sorted array. Using binary search would take 3 iterations to reach G in a sorted array.

# Given an unsorted collection of a million items, which algorithm would you choose between linear search and binary search? Explain your reasoning.
>If the array is unsorted then I would not use binary search. Using binary for this case would result in an algorithm that simply does not work. The assumption of elements to the left of one being smaller and to the right of that said element being larger are not necessarily true in this case. Thus, using linear search would be ideal in this case, since binary search only works on sorted data. 


# Given a sorted collection of a million items, which algorithm would you choose between linear search and binary search? Explain your reasoning.
>In a sorted list of a very large data set the binary search algorithm is ideal since in one iteration half of the data set + 1 will be eliminated and continue in this pattern until the element is reached. Thus, in most cases the binary search algorithm will be preferred for a sorted data set. 


# You and a friend have set a wager to see who can find the word "Albatross" in the dictionary the fastest. Write a program to allow you to win the bet.
>Since the dictionary is a sorted list with A LOT OF ELEMENTS, it would dictate that the binary search be used. However, the word Albatross is close to the beginning of the dictionary which would also take a small amount of iterations for linear search to find. This is a hard question to answer without knowing the total length of the data set. Most likely I would employee linear search in this scenario. 


```
function findItem(dictionary, target)
	FOR each item in the dictionary
	  IF item = target THEN
	    RETURN index of item
	  END IF
	END FOR
    
    RETURN Not Found
END

```

# You work at a pet store, and a child has asked you to net the only white-spotted goldfish from the fish tank. Write a program that will help you net the right fish.
>This is an unsorted data set with constantly moving elements. Unless this set is somehow sorted, remains constant, and has defined numeric index for every species of goldfish, I would use linear search. This is assuming this data is a hypothetical array data structure. Which would have to be searched by an exhaustive linear search method that goes one-by-one. However, if we could sort the set, the set does not change every iteration, and has indexed species, I would use a simple lookup for the item associated with the known index. This is a problem that depends on what data structure the hypothetical exists in and if this data structure is allowed to change every iteration such as a live fish tank would. 

## sample implementation for linear search if tank will not be sorted. 

```
function findFish(fishTank, target)
	FOR each item in the fishTank
	  IF item = target THEN
	    RETURN item
	  END IF
	END FOR
    
    RETURN Not Found
END

```



