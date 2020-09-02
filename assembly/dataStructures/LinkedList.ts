import { Node } from "./Node";

export class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  length: i32 = 0;

  get len(): i32 {
    return this.length;
  }

  push(val: T): this {
    const newNode = new Node<T>(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      (this.tail as Node<T>).next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): Node<T> | null {
    let currentNode = this.head;
    if (!currentNode) return null;
    let nextNode = currentNode.next;
    const poppedNode = this.tail;
    while (nextNode) {
      if (nextNode === poppedNode) break;
      currentNode = nextNode;
      nextNode = nextNode.next;
    }
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return poppedNode;
  }

  shift(): Node<T> | null {
    const shiftedHead = this.head;
    if (!shiftedHead) return null;
    const head = this.head;
    if (head) this.head = head.next;
    shiftedHead.next = null;
    if (this.length === 1) this.tail = null;
    this.length--;
    return shiftedHead;
  }

  unshift(val: T): this {
    const newNode = new Node<T>(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx: i32): Node<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    let currentNode = this.head;
    let listIdx = 0;
    while (idx !== listIdx) {
      if (currentNode) currentNode = currentNode.next;
      listIdx++;
    }
    return currentNode;
  }

  set(idx: i32, val: T): boolean {
    if (idx < 0 || idx >= this.length) return false;
    const node = this.get(idx) as Node<T>;
    node.val = val;
    return true;
    return false;
  }

  insert(idx: i32, val: T): boolean {
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new Node<T>(val);
    const prevNode = this.get(idx - 1);
    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
    this.length++;
    return true;
  }

  remove(idx: i32): Node<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const prevNode = this.get(idx - 1) as Node<T>;
    const removedNode = prevNode.next as Node<T>;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  reverse(): this | null {
    let currentNode = this.head;
    if (!currentNode) return null;
    this.head = this.tail;
    this.tail = currentNode;
    let next: Node<T> | null = null;
    let prev: Node<T> | null = null;
    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      if (next) currentNode = next;
    }
    return this;
  }
}
