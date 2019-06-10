# Doubly Linked List

## Description

This is a fork of Jason Jones' [doubly-linked-list library](https://github.com/jasonsjones/doubly-linked-list), aimed to provide a doubly-linked-list data structure that also supports O(1) constant-time lookups of elements by ID.  

This is accomplished by:

- _Quickly_ generating a unique ID for each element inserted into the doubly-linked list.
- Index all entries in the list by their ID, in a hashtable which is maintained internally by the library. Depending on the javascript implementation, this implies storage (memory) requirements of O(n^2).

## Usage
```javascript
list = new LinkedList();
list.insert("a");
// => true
const node = list.getHeadNode();
node.id;
// => "c12Bzz81"
list.findById("c12Bzz81") == node;
// => true
```

## API

The original doubly-linked-list documentation can be found on Jason Jones [github page](https://github.com/jasonsjones/doubly-linked-list) for the original library. On this page I'll only provide the documentation for features added in this fork.

### .findByID(id: string)
This will return the node in the list which corresponds with the passed ID string. 
