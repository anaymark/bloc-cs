# Write pseudocode for bubble sort.
```
FUNCTION bubbleSort( arr )
   DEFINE variable swapped
    DO
    SET swapped = FALSE
    for each i in 0 to length(arr) - 1 iterate
      if arr[i] > arr[i+1] then
        swap( arr[i], arr[i+1] )
        swapped := true
      end if
    end for
  while swapped
end procedure
```

# Write pseudocode for quicksort.

```
FUNCTION quicksort(arr)
  IF arr length = 0 RETURN []
  ELSE 
    SET left = [], right = [], pivot = arr[0]

    FOR i = 1 to arr length iterate
      IF arr[i] < pivot
        ADD arr[i] TO left
      ELSE
        ADD arr[i] TO right
      END IF
    END FOR
  RETURN quicksort(left).concat(pivot, quicksort(right));
  END IF
END 
```


# We talked about time complexity in a previous checkpoint, and how to get an idea of the efficiency of an algorithm. After looking at the pseudocode for the above sorting methods, identify why merge sort and quick sort are much more efficient than the others. Walking through each algorithm with a few sample collections may help.
> Merge sort and quick sort are simple to implement and use only a WHILE and a FOR loop respectively. This puts mergeSort at O(nlog(n)) for worst case and Quick sort at O(n^2) for the worst case when it comes to time complexity. Space complexity comes at a slight trade off when using these algorithms. If time complexity and simplicity of use is a concern, then these two sorting algorithms would be preferred among the comparison sorting algorithms.



# All of the sorts addressed in this checkpoint are known as comparison sorts. Research bucket sort and explain how it works. What is the ideal input for bucket sort?
> In a bucket sort, elements are assigned to buckets, typically using an array where the index is the value. Thus, more memory is required for the buckets and clustering becomes a concern, as well as sparse element distribution. Bucket sort is ideal when memory usage is not an issue and the elements of the data set being sorted are fairly evenly distributed. 


