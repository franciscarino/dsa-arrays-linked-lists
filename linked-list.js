"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //instantiate a new Node
    // if list is empty, set head and tail to new node
    // set current tail next to new Node
    // set tail = new Node
    // increment length


    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // point current tail to newNode
      this.tail = newNode; // setting the 'new' tail to newNode
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // instantiate a newNode
    // if list is empty, set head and tail to new node
    // set newNode to point the current head
    // set head = newNode
    // increment length

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; //setting newNode next to current head
      this.head = newNode; // reassigning head to newNode
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // check if list is empty, if so, throw error
    // set variable to tail node (this.length -1)
    // set reference to tail.val
    // reassign tail
    // return tail node

    if (!this.head) throw new Error("Empty list");

    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }

    const currTail = this.tail.val;
    let current = this.head;

    while (current !== null) {
      if (current.next === currTail) {
        this.tail = current;
        this.length--;
        return currTail;
      }
      current = current.next;
    }
  }


  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
