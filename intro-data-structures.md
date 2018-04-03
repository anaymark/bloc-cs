# A line of people at an amusement park ride. The line is composed of members, represented as strings. There is a front to the line, as well as a back. When someone enters the line, place them at the end. People may leave the line whenever they see fit, and those behind them take their place. Given the above real-world information, use an array data structure to code the following solution.

* a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
```
let arr = ["Vivian", "Ava", "Josh", "Patrick", "Mike"];
```
* b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.
```
arr[arr.length] = "Mary";
```
* c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).
```
function findName(arr, name)
{
  var name;
    for(var val in arr){
	  if(arr[val] === name){
	    index = val;
		return index;
		}
	}
	return "Does not exist";
};
```
* d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?
```
function findName(arr, name)
{
  var name;
    for(var val in arr){
	  if(arr[val] === name){
	    index = val;
		return index;
		}
	}
	return "Does not exist";
};

```
* The function will return an undefined if you do not define what should occur in the case the name we are looking for does not exist. In my case I set up a return statement of "Does not exist" to let the user know this name doesn't exist in the array.

* e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?
```
function addFriend(line, myPosition, friend){
  if(Array.isArray(line) && myPosition !== (undefined || null) && myPosition >= 0 && typeof friend === "string"){
    Array.prototype.insert = function ( myPosition, friend ) {
      this.splice( myPosition, 0, friend );
    };
    line.insert(myPosition, friend);
  }
  else {
	return "Please make sure the parameters are correct values and your friend is a string. ;)"
  }
};

```
* f) If Patrick wants to leave the line, how would you delete him from the array?
```
function leaveLine(line, myPosition, myName){
  if(Array.isArray(line) && myPosition >= 0 && myPosition !== (undefined || null) && line[myPosition] == myName){
  	Array.prototype.remove = function ( myPosition, num ) {
      this.splice( myPosition, 1 );
    };
    line.remove(myPosition, 1 )
  }
  else {
	return "Please make sure your position in line is correct and this position reflects your name."
  }
}

```

# Provide another real-world example that you can model using a data structure.

>Data Structures can model any collection of Objects that are ideally indexed by a simple number and can be grouped/retrieved by that index. Anything from a list of available alcoholic drinks at a restaurant, to menu items. One example is menu food items. 

# How would your data structure allow developers to access and manipulate the data?

>These menu food items can be stored in an array of objects such as:
[
{
item: name_1,
description: '',
ingredients: '',
available: true,
orderTrackID: 1234,
nurtitionalInfo: ''
},
{
item: name_2,
description: '',
ingredients: '',
available: true,
orderTrackID: 1234,
nurtitionalInfo: ''
}
]

>The data can be accessed by simple array methods. to find the index of a menu item that needs to be accessed, a simple arr.findIndex(menu => menu.item === "name_1"); can be used. Moreover, looking at any single items properties can be achieved simply by accessing the items array index. So to look at item:name_1. We can simply look at it's index that we know now thanks to the arr.findIndex() method. Manipulating these objects is as simple as accessing the index[num].itemProperty for this data structure. So if we wanted to give item: name_1 a name we would simply say arr[0].item = "Burger";. To delete items we can simply assign a null or use arr.splice(arr.findIndex(menu => menu.item === "Burger"),1); to delete the item from the list.
