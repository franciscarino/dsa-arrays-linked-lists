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

  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count !== idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
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

    let pre = this.head;
    let temp = this.head.next;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return pre.val;
    }

    while (temp.next !== null) {
      pre = pre.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;
    return temp.val;

  }

  /** shift(): return & remove first item. */

  shift() {
    // temp to head var to return
    // make head the second item


    if (!this.head) throw new Error("Empty list");

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead.val;
    }

    this.head = this.head.next;
    this.length--;

    return oldHead.val;


  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // set a counter to zero
    // return the value at idx
    // if index is greater than or equal length throw
    if (idx >= this.length || idx < 0) throw new Error("Index Not Found");
    let count = 0;

    let current = this.head;
    while (current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // set a counter to zero

    // when the counter reaches the idx
    // change value at that node
    if (idx >= this.length || idx < 0) throw new Error("Index Not Found");
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (idx === count) {
        current.val = val;
        return;
      }
      count++;
      current = current.next;
    }



  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error("Index Not Found");
    // when count is at idx -1 that node needs to point at
    // our node an out node needs to point at the next node

    if (this.length === 0) {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    let pre = this.head;

    for (let k = 0; k < idx - 1; k++) {
      pre = pre.next;
    }

    let aft = pre.next;
    let vtx = new Node(val);
    vtx.next = aft;
    pre.next = vtx;
    this.length++;


  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;

  }

  /** return average (mean) of list values. */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
