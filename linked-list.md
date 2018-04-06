# What are some pros and cons of using linked lists instead of arrays?

* Pros: take up much less memory since all the nodes do not have to be stored together in memory, and are accessed through references. This enables huge scalability and huge storage benefits. Moreover, it is easier to insert and delete any position in the list at constant time. 

* Cons: data is not indexed, to look up a list you must go from the beginning to the node you are searching for, this is relatively inefficient when it comes to accessing elements. 

# Come up with a real world example of a linked list.

* The best real-world example that I have seen is a scavenger hunt. You start with the main clue, and all the other clues to retrieve are accessed through chaining. The only drawback to this example is that the scavenger hunt is not set up to be dynamic and thus must have an end at some point. However, this is the best relation that I have seen on this topic. 

* Linked lists seem to be the most useful for real-time computing where mission critical tasks have a serious time concern. They also seem to be useful in queues where you want to be able to add/remove elements, which are really expensive to do in large Arrays. However, any tasks with random access suffer with linked lists.


# Programming Questions
## You may program the following questions in any language of your choice (JavaScript, pseudocode, etc.).Before beginning to code, write out a plan explaining how to solve the question.

# The Linked List push function should take a value, create a node, and add it to the end of a list. Below is a push function for a singly linked list. However, there is something wrong with it. Find the bug and fix the code.

```
LinkedList.prototype.push = function(element) {
 SET node = {
   value: element,
   next: null
 }

 IF the head node does not exist
   THEN SET head to node
 ENDIF
 ELSE
   SET current to head
   WHILE current.next
     SET current EQUALTO current.next
 ENDELSE
   SET current.next EQUALTO node;
}

```

# Example 

```
LinkedList.prototype.push = function(element){
  var node = {
    value: element,
    next: null
  }
  if(!this.head){
    this.head = node;
  }
  else{
    current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = node;
  }
}

```



Given an unsorted singly linked list, remove all duplicates from the linked list.
Example
Input: a -> c -> d -> d -> a
Output: a -> c -> d

```
function LinkedList(){
	var length = 0;
	var head = null;

	var Node = function(element){
	  this.element = element;
	  this.next = null
	}

	this.size = function(){
	  return length;
	}

	this.head = function() {
	  return head;
	}

	this.add = function(element){
	  var node = new Node(element);
	  if(head === null){
	  	head = node;
	  }
	  else{
	  	var  currentNode = head;

	  	while(currentNode.next){
          currentNode = currentNode.next;
	  	}
	  	currentNode.next = node;
	  }
	  length++;
	}
//This is the example implementation.
   this.removeDuplicate = function(){
   	var prevNode = head;
   	var currentNode = head.next;
   	var nodes = {};
   	while(currentNode != null){
   	  if(!nodes[currentNode.data]){
   	  	nodes[currentNode.data] = true;
   	  }
   	  else{
   	  	prevNode.next = currentNode.next;
   	  	length--;
   	  }
   	  prevNode = currentNode;
   	  currentNode = currentNode.next;
   	}
   };

   this.elementAt = function(index){
     var currentNode = head;
     var count = 0;
     while(count < index){
     	count++;
     	currentNode = currentNode.next;
     }
     return currentNode.element;
   }
};
```

## Example Test

```
var list = new LinkedList();
list.add('a');
list.add('c');
list.add('d');
list.add('d');
list.add('a');

list.elementAt('0');
->"a"
list.elementAt('1');
->"c"
list.elementAt('2');
->"d"
list.elementAt('3');
->"d"
list.elementAt('4')
->"a"

list.removeDuplicate();

list.elementAt('0');
->"a"

list.elementAt('1');
->"c"

list.elementAt('2');
->"d"

list.elementAt('3');
->Uncaught TypeError: Cannot read property 'element' of null
    at LinkedList.elementAt (<anonymous>:71:25)
    at <anonymous>:1:6

list.elementAt('4');
->Uncaught TypeError: Cannot read property 'next' of null
    at LinkedList.elementAt (<anonymous>:69:33)
    at <anonymous>:1:6

```


Given an unsorted singly linked list, reverse it.
Example
Input: a -> b -> c -> d
Output: d -> c -> b -> a

```
function LinkedList(){
	var length = 0;
	var head = null;

	var Node = function(element){
	  this.element = element;
	  this.next = null
	}

	this.size = function(){
	  return length;
	}

	this.head = function() {
	  return head;
	}

	this.add = function(element){
	  var node = new Node(element);
	  if(head === null){
	  	head = node;
	  }
	  else{
	  	var  currentNode = head;

	  	while(currentNode.next){
          currentNode = currentNode.next;
	  	}
	  	currentNode.next = node;
	  }
	  length++;
	}
 // Sample implementation
   this.reverseList = function(){
   	var currentNode = head;
   	var prevNode = null;
   	var nextNode = null;
   	while(currentNode !== null){
   	 nextNode = currentNode.next
   	 currentNode.next = prevNode;
   	 prevNode = currentNode;
   	 currentNode = nextNode;
   }
   head = prevNode;
   }
   
   this.removeDuplicate = function(){
   	var prevNode = head;
   	var currentNode = head.next;
   	var nodes = {};
   	while(currentNode != null){
   	  if(!nodes[currentNode.data]){
   	  	nodes[currentNode.data] = true;
   	  }
   	  else{
   	  	prevNode.next = currentNode.next;
   	  	length--;
   	  }
   	  prevNode = currentNode;
   	  currentNode = currentNode.next;
   	}
   };

   this.elementAt = function(index){
     var currentNode = head;
     var count = 0;
     while(count < index){
     	count++;
     	currentNode = currentNode.next;
     }
     return currentNode.element;
   }
};

```

## Example Test

```
var list = new LinkedList();

list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.elementAt(0);
->"a"
list.elementAt(1);
->"b"
list.elementAt(2);
->"c"
list.elementAt(3);
->"d"
list.reverseList();
list.elementAt(0);
->"d"
list.elementAt(1);
->"c"
list.elementAt(2);
->"b"
list.elementAt(3);
->"a"

```


