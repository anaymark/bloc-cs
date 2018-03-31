# A line of people at an amusement park ride. The line is composed of members, represented as strings. There is a front to the line, as well as a back. When someone enters the line, place them at the end. People may leave the line whenever they see fit, and those behind them take their place. Given the above real-world information, use an array data structure to code the following solution.

* a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
```
let arr = ["Vivian", "Ava", "Josh", "Patrick", "Mike"];
```
* b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.
```
arr.push["Mike"];
```
* c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).
```
arr.indexOf("Josh");
```
* d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?
```
arr.indexOf("Emily");
-1

-1 since it does not exist.
```
* e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?
```
arr.splice(arr.indexOf("Ava"),0,"Melissa");
```
* f) If Patrick wants to leave the line, how would you delete him from the array?
```
arr.splice(arr.indexOf("Patrick"),1);
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
