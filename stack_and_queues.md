# What is the main difference between a stack and a queue?

* Stack data structure follows LIFO rules, or Last In First Out rules of
prioritization. Meaning, the last element to enter, is also the first element to leave. 
* Queue data structure follows FIFO rules, or First In First Out rules of prioritization. Meaning, the first element to enter, is also the first element to leave. 
 
# What are the similarities between stacks and queues?

* Both are advanced and abstract data structures that follow a linear pattern. Both of these structures allow for task management, creation of order of operations, and support system functions such as undo/redo and back/forward buttons.

# Imagine you are an engineer tasked with implementing the UNDO and REDO options in a word processor such as Microsoft Word. Which data structure would you use for each option and why?

*Perfect example of the need to use both the Stack for active canvas storage, and the Queue for elements that are popped off the canvas.

* UNDO button would definitely be a data structure that follows LIFO rules of prioritization. Since we want the last element in to be popped out for the undo button to work, I would use the Stack data structure for this implementation for the work canvas. However, the actual tracking of items that are UNDONE would need to be in a FIFO data structure or Queue, to be able to be accessed to from the first in element position and be stored to be added back later in proper order of execution. 

* REDO button would also need to follow the LIFO rules of prioritization. Since we want to add elements back to the end of the data structure we would again use a Stack for this implementation. However, we would also need to keep track of the elements we are popping off of the Stack using a FIFO Queue for the elements that were UNDONE. Thus, we can utilize FIFO architecture to store the elements that are UNDONE, and LIFO architecture for the current line of work canvas.

#Programming Questions
#You may program the following question in any language of your choice. Before you begin coding, write out a plan as to how you will solve the question.

# Given a string, reverse it using a stack. For example, the string "Bloc!" should be converted to "!colB".

* First step is to store the string as a stack with characters "stacking" on top of each other, utilizing the LIFO architecture.
* Next step is to pop off every character one-by-one and store this data in an empty string. 


```
//Stack the string characters
function storeString(originalString){
  this.count = 0;
  this.storage = [];
  for(this.count; this.count < originalString.length; this.count++)
  {
    this.storage[this.count] = originalString.charAt(this.count);
  }
  storedString = this.storage;
  return storedString;	
}

//Take character from end of the stack and push to beginning of new stack.
//LIFO 
function reverseString(storedString){
  var storage = [];
  for(var i = storedString.length -1; i>=0;i--)
  {
  	storage.push(storedString[i]);
  }
  return storage.join("");
}

```

## Example:

```
storedString = storeString("Bloc!");
->["B", "l", "o", "c", "!"]

reverseString(storedString)
->"!colB"

```

# Implement the delete functionality of a stack using one queue. Make a FIFO data structure mirror the functionality of a LIFO data structure.
>To delete an item, take all of the elements in the queue one at a time and put them at the end of the queue, except for the last one which should be deleted and returned.

```
CLASS Stack
 FUNCTION pop(queue)
   FOR START at 0, length of queue MINUS one, ++
     REMOVE elements one at a time
     PUSH elements that were removed to back of the line
   ENDFOR
     SET temporary element to queue at first position (zero index)
     DELETE queue at first position (zero index)
     RETURN temporary element
 END FUNCTION

```
```
 function poped(queue){
 	for(i = 0; i < queue.length -1; i++){
 		queue.push(queue.shift());
 	}
    temp = queue[0];
    queue.splice(0,1);
 	return temp;
 }
```

CLASS Stack
 FUNCTION pop(queue)
   SET temp to the last element
   REMOVE LAST element of the queue from queue
   RETURN temp
 END FUNCTION
END CLASS

```

#Fill in the methods for the following Queue class so that it will work as expected (FIFO).

```
CLASS QUEUE
 FUNCTION enqueue(element)
   APPEND element to the end of the list
 END FUNCTION

 FUNCTION dequeue
   SET temp to the first element
   REMOVE first element of list from list
   RETURN temp
 END FUNCTION
END CLASS

```

