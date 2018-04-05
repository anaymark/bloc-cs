# What is a hash table?
A hash table is an abstract data structure that aims to take key:value pairs and index these pairs into "buckets" through a hashing function. This function takes a key and assigns an index, than in theory should be unique, based on the implementation of the hash table. In most hash structures there is collisions, which occur when a hash function assigns multiple keys to the same index. These collisions can be handled multiple ways, although the most famous way seems to be through chaining, or using linked lists to create a "chain" at the index where multiple keys exist. 


# What is hashing?
Hashing is the use of a hash function to assign indexing to a key and it's value for storage in the index box. It can be thought of as a social security number in the most simplest of ways. You are the value, your name is the key that becomes the index(xxx-xx-xxxx). It is imperfect because through error others might get assigned your index(xxx-xx-xxxx) by mistake, but this would be a good example of a hash map and hashing.


# How does a hash table store data?
>Key:Value pairs are called touples and are stored in buckets that are indexed. The indexing is determined by hashing and is therefore usually imperfect which causes collision, or multiple keys assigned to the same index bucket. This is taken care through collision resolution techniques. 
Sample storage would be ['index'=>{key:value}].


# How are hash tables and objects different?
>Depends on the language, speaking of JavaScript Hash tables take keys and index them, this makes it easier to find out the length of the hash map and more efficient for retrieval of data in some cases. Moreover, in a hash table values that you store and retrieve are always the same, which is not true in the case of objects since mixed data primitives can be placed into objects. 

# Determine whether you would use a hash table or an object to store each of the following pieces of data:

* A list of pets and their unique names.
  
>You could store this in a hash since the pet's have unique names, which can be used as keys to be translated to indexes and reduce the risk of collision. However, there is multiple ways of storing this data, the identifier for this data will be the pet name to yeild the value of the pet type. We can also store by pet type and group all the unique names. However, this will promise to be not ideal for lookup and storage. A way to store the latter data structure would be to create an object that holds all the pet types, define the pet types, and store the unique names in the pet types. Then lookup would be as easy as searching the object for the pet type and typing in the name to see if that pet exists, this is again assuming that these pet names are unique, if this is not the case, further properties for the pet would be needed for identification. 


* The name, age, and the birthday of your best friend.

>This would highly depend on if you just want to store this data as a simple retrieval with many other individuals in a sort of list. Howeverm this would not be a great candidate for a hash list since many people share first names. If the first and last name was used, it would be a better cadidate for a hashmap. Or, do we want this data to also have methods associated with it where we can get the different data primitives and set the different primitives and even have a function to send a birthday message on the day of. It all depends on how we want to use this data.



* The name and location of every company in a given city.

>This would not be a very good candidate for a hash list unless every company had a unique name or a further identifier that seperates the naming schema to be used as the key. This seems to be better served in an object or list of some sort that I have not yet learned. The object structure can be a city object, that is further broken down into burroughs and further broken down into store types for groupings. 

* All of the books checked out from a library by a particular individual.

>This is a perfect example of a hash map canidate since we have one unique individual which can be referenced by some id that will stay unique, unlike names. Storing all the books checked out by an individual would make it a simple lookup by the identifier(key) of that given individual. 

* The primary and secondary phone numbers for a contact.

> Contacts that are only stored by first name pose a serious issue and contacts that store with first and last still pose an issue for hashing. Moreover, there would be no data difference between the primary and seconday number in a hash. If these contacts could have a unique identifier, than this could be stored in a hash map. But for lack of uniqueness in contact names, we can store this in an object with further breakdown of name and contact objects. 

# Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

```
//constructor for hash table
function customerDataBase(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
};

//constructor for hash node
function addCustomer(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

//hash
customerDataBase.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i< key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets
  return bucket
}

//collision checking
customerDataBase.prototype.insert = function(key, value){
  let index = this.hash(key);
  if (!this.buckets[index]){
    this.buckets[index] = new addCustomer(key, value);
  }
  else if (this.buckets[index].key === key){
    this.buckets[index].value = value
  }
  else{
    let currentNode = this.buckets[index];
    while (currentNode.next){
      if(currentNode.next.key === key){
        currentNode.next.value = value;
        return
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new addCustomer(key, value);
  }
}

//search by key
customerDataBase.prototype.get = function(key){
  let index = this.hash(key);
  if (!this.buckets[index].value) return null
  let currentNode = this.buckets[index];
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
  }
  return null;
}
```

## Example implementation:

```
customers = new customerDataBase(1000);
->customerDataBase {buckets: Array(1000), numBuckets: 1000}

customers.insert("7202122133",["Bloc Dev","7202122133","12345 Fake St, Denver, CO, 80012"])

customers.insert("7201122222",["Bloc Champ","7201122222","12546 Fake Ave, Fort Collins, CO, 80012"])

customers.get("7202122133")

->(3) ["Bloc Dev", "7202122133", "12345 Fake St, Denver, CO, 80012"]

```

# Build a system that allows a store owner to track their store's inventory using a hash table for storage.

>This is not good use of a hash table since inventory numbers are easier to update through just simple objects. This would be perfect for objects within objects.

```
//constructor for hash table
function inventory(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
};

//constructor for hash node
function addItem(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

//hash
inventory.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i< key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets
  return bucket
}

//collision checking
inventory.prototype.insert = function(key, value){
  let index = this.hash(key);
  if (!this.buckets[index]){
    this.buckets[index] = new addItem(key, value);
  }
  else if (this.buckets[index].key === key){
    this.buckets[index].value = value
  }
  else{
    let currentNode = this.buckets[index];
    while (currentNode.next){
      if(currentNode.next.key === key){
        currentNode.next.value = value;
        return
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new addItem(key, value);
  }
}

//search by key
inventory.prototype.get = function(key){
  let index = this.hash(key);
  if (!this.buckets[index].value) return null
  let currentNode = this.buckets[index];
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
  }
  return null;
}
```

## Example implementation:

```
inventory = new inventory(300);
->inventory {buckets: Array(300), numBuckets: 300}

inventory.insert("Lawn Mower",[['Echo Brand',40],['Canada Mist',30]]);

inventory.insert("Weed Whaker",[['Grasspelt',400],['Finedust',300]]);

inventory.get("Lawn Mower");

->(2) [Array(2), Array(2)]
0
:
(2) ["Echo Brand", 40]
1
:
(2) ["Canada Mist", 30]
length
:
2
__proto__
:
Array(0)

inventory.get("Weed Whaker")

->(2) [Array(2), Array(2)]
0
:
(2) ["Grasspelt", 400]
1
:
(2) ["Finedust", 300]
length
:
2
__proto__
:
Array(0)

```

# Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data. 

```
//constructor for hash table
function newspapersDataBase(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
};

//constructor for hash node
function addPaper(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

//hash
newspapersDataBase.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i< key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets
  return bucket
}

//collision checking
newspapersDataBase.prototype.insert = function(key, value){
  let index = this.hash(key);
  if (!this.buckets[index]){
    this.buckets[index] = new addPaper(key, value);
  }
  else if (this.buckets[index].key === key){
    this.buckets[index].value = value
  }
  else{
    let currentNode = this.buckets[index];
    while (currentNode.next){
      if(currentNode.next.key === key){
        currentNode.next.value = value;
        return
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new addPaper(key, value);
  }
}

//search by key
newspapersDataBase.prototype.get = function(key){
  let index = this.hash(key);
  if (!this.buckets[index].value) return null
  let currentNode = this.buckets[index];
    while(currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
  }
  return null;
}
```

## Example implementation:

```
newspaperDB = new newspapersDataBase(1000);

->newspapersDataBase {buckets: Array(1000), numBuckets: 1000}

newspaperDB.insert("Example Publisher, 09/12/2019","This is an example publication. It is very short, but gets the point across.")

newspaperDB.get("Example Publisher, 09/12/2019");

->"This is an example publication. It is very short, but gets the point across."

```

