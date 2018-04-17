# What is a binary tree and what makes it unique to other trees?
>Binary search trees are a particular type of data structure that provides an efficient way of sorting, searching and retrieval. This efficiency is due to the way the nodes are arranged. Each node in the tree stores a key(data) and is split off into two more nodes exactly, a left and a right node. This structure flows from a single origin node that divides the data roughly at the midpoint. Moreover, this tree is split off into a left and a right side. The keys in the left part of the tree, which is referenced as the left subtree are less than the keys of the parent node (Left < Pnode). The keys on the right of the subtree are larger than the parent node (Pnode < Right). This allows for efficient storage and searching due to automatically being able to eliminate half of the data set based on search input, again this is in theory, since a left subtree and right subtree are not identical, and do not need to be mirror images.

# What is a heuristic?
>A heuristic is a common sense, throughout way of processing ideas, discovery and decision making. Heuristic problem-solving methods and processes employ the idea of a practical solution that is quick and efficient, but prone to errors. This can be thought of as an imperfect and not optimal solutions. 


# What is another problem besides the shortest-path problem that requires the use of heuristics?
>Many problems in artificial intelligence and mathematical optimization employ the use of heuristic problem solving. One of the most interesting designs heuristics are used is virus scanning. Using behavior-based heuristic scanning allows virus scanners to detect highly randomized polymorphic virus that simple string scanners cannot. This also enables the virus to be defined by this kind of system, which on the downside can cause issues with virus definition. 


# What is the difference between a depth-first search and a breadth-first search?
>Depth-first searches will follow the path from the root or origin all the way down as far as possible down a path. Once the path terminal has been reached and exhausted, the next possible closest path will be searched in the same manner. This will continue until all paths have been searched. This method involves a good amount of backtracking. 
>Breadth-first searches will follow a directive that searches based on proximity to the root node. Thus, the closer the proximity or neighborhood defined will be searched first, before moving on to more distal proximities.  

# Explain in your own words what an undirected, a-cyclic, unweighted graph is.
* Undirected simply means the flow of the graph is not defined in any single direction at any specific node. Thus, all the nodes behave as intersections where travel is permitted down any defined path. 
* A-cyclic defines something that does not connect full-circle, something that does not allow for infinite travel, this must have a terminal end.
* Unweighted means there is no associations that add another dimension to the nodes in question. Thus, all nodes will have equal weight in all aspects of accessibility, search ability, storage, etc. Weights are used to add another dimension. 

>A graph that is undirected, a-cyclic and unweighted is one that simply does not define a direction for flow, does not connect and thus has terminal ends, and does not add another dimension to abide by for the elements and capsules that exist. 

What kind of graph is a binary search tree?
> A binary search tree is an undirected since traversing in all directions of definition is possible. It is a A-cyclic graph since it is not possible to start at one side of the tree and reach the other side without accessing the parent node. Lastly, it is an unweighted graph in most cases, although that is something that can be added to the graph if the structure of complexity is needed. 

Programming Questions

For the following questions, describe in words how you could solve the problem and then do so. Use the depiction of the Binary Search Tree to refer to the examples.

Binary Search Tree Image

Given a Binary Search Tree and a value, write a function that checks to see whether the value exists within the tree.

```
//Create Node
class Node {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//Binary Tree 
class BinarySearchTree{
  constructor(){
  this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

//checks to see if the element is present in the tree.
  isPresent(data){
    let current = this.root;
      while(current){
        if(data === current.data){
        return "The value " + current.data + " exists";
        }
        if(data < current.data){
          current = current.left;
        }
        if(data > current.data){
          current = current.right
        }
      }
    return "The value " + data + " does not exist";
  }

  lowestCommonAncestor(root, n1, n2) {
  if (!root || root === n1 || root === n2) return root;
  var resL = lowestCommonAncestor(root.left, n1, n2);
  var resR = lowestCommonAncestor(root.right, n1, n2);
  return (resL && resR) ? root : (resL || resR);
 }
}
```

## Example implementation
```
const bst = new BinarySearchTree();

bst.add(20);
bst.add(10);
bst.add(30);
bst.add(33);
bst.add(44);
bst.add(11);
bst.add(8);
bst.add(3)

bst
->BinarySearchTree {root: Node}root: Node {data: 20, left: Node, right: Node}__proto__: Object


bst.isPresent(10)
->"The value 10 exists"


bst.isPresent(33)
->"The value 33 exists"


bst.isPresent(14)
->"The value 14 does not exist"

```



# Given a Binary Search Tree and two nodes, n1 and n2, write a function that finds the distance between the two nodes.
 
```
(function(){

    let values = prompt("Enter unique integers for bin tree");
    let nodes = prompt("Enter nodes to calculate distance");

    let rootNode = createTree(values);

    alert(inOrder(rootNode,""));
    let nodeArr = nodes.split(",");
    var p1 = getPath(rootNode,parseInt(nodeArr[0]),"");
    var p2 = getPath(rootNode,parseInt(nodeArr[1]),"");
    
    if(p1[0]==-1 || p2[0] == -1){
        alert(-1);
        return;
    }
        
    
    alert(p1+" "+p2);
    let exit = false;i=0,dist=0;
    while(exit==false){
        if(p1[i]!=p2[i]){
            dist=(p1.length-i)+(p2.length-i);
            exit=true;
        }else if(i==p1.length-1){
            dist = (p2.length-1)-i;
            exit=true;
        }else if(i==p2.length-1){
            dist = (p1.length-1)-i;
            exit=true;
        }
        i++;
    }

    alert(dist);

    function inOrder(currNode,path){
        if(currNode==null)
            return path;
        path=inOrder(currNode.left,path);
        path+=currNode.val+",";
        path=inOrder(currNode.right,path);
        return path;
    }

    function getPath(currRoot,theVal,path){
        if(!currRoot || currRoot==null)
            return [-1];
        if(!path)
            path=[];
        path.push(currRoot.val);
        if(currRoot.val == theVal)
            return path;
        else if(currRoot.val > theVal)
            return getPath(currRoot.left,theVal,path);
        else
            return getPath(currRoot.right,theVal,path);
    }

    function createTree(values){
        var vals = values.split(",");
        let rootNode;
        vals.forEach(function(v) {
            v = parseInt(v);
            if(!rootNode)
                rootNode = {left:null,right:null,val:v};
            else
                insertNode(rootNode,{left:null,right:null,val:v});
        }, this);
        return rootNode;
    }

    function insertNode(currRoot,currNode){
        if(currRoot.val>currNode.val){
            if(currRoot.left==null)
                currRoot.left=currNode;
            else
                insertNode(currRoot.left,currNode);
        }else{
            if(currRoot.right==null)
                currRoot.right=currNode;
            else
                insertNode(currRoot.right,currNode);
        }
    }

})();
undefined
(function(){

    let values = prompt("Enter unique integers for bin tree");
    let nodes = prompt("Enter nodes to calculate distance");

    let rootNode = createTree(values);

    alert(inOrder(rootNode,""));
    let nodeArr = nodes.split(",");
    var p1 = getPath(rootNode,parseInt(nodeArr[0]),"");
    var p2 = getPath(rootNode,parseInt(nodeArr[1]),"");
    
    if(p1[0]==-1 || p2[0] == -1){
        alert(-1);
        return;
    }
        
    
    alert(p1+" "+p2);
    let exit = false;i=0,dist=0;
    while(exit==false){
        if(p1[i]!=p2[i]){
            dist=(p1.length-i)+(p2.length-i);
            exit=true;
        }else if(i==p1.length-1){
            dist = (p2.length-1)-i;
            exit=true;
        }else if(i==p2.length-1){
            dist = (p1.length-1)-i;
            exit=true;
        }
        i++;
    }

    alert(dist);

    function inOrder(currNode,path){
        if(currNode==null)
            return path;
        path=inOrder(currNode.left,path);
        path+=currNode.val+",";
        path=inOrder(currNode.right,path);
        return path;
    }

    function getPath(currRoot,theVal,path){
        if(!currRoot || currRoot==null)
            return [-1];
        if(!path)
            path=[];
        path.push(currRoot.val);
        if(currRoot.val == theVal)
            return path;
        else if(currRoot.val > theVal)
            return getPath(currRoot.left,theVal,path);
        else
            return getPath(currRoot.right,theVal,path);
    }

    function createTree(values){
        var vals = values.split(",");
        let rootNode;
        vals.forEach(function(v) {
            v = parseInt(v);
            if(!rootNode)
                rootNode = {left:null,right:null,val:v};
            else
                insertNode(rootNode,{left:null,right:null,val:v});
        }, this);
        return rootNode;
    }

    function insertNode(currRoot,currNode){
        if(currRoot.val>currNode.val){
            if(currRoot.left==null)
                currRoot.left=currNode;
            else
                insertNode(currRoot.left,currNode);
        }else{
            if(currRoot.right==null)
                currRoot.right=currNode;
            else
                insertNode(currRoot.right,currNode);
        }
    }

})();
```
