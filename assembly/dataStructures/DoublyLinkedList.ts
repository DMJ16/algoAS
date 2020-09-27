export class ListNode<T> {
  val: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;
  constructor(val: T) {
    this.val = val;
  }
}

export class DoublyLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;
  length: i32 = 0;

  get len(): i32 {
    return this.length;
  }

  push(val: T): this {
    const newNode = new ListNode<T>(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tail = this.tail;
      if (tail) tail.next = newNode;
      newNode.prev = tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): ListNode<T> | null {
    if (this.head == null) return null;
    const poppedNode = this.tail;
    let tail: ListNode<T>;
    if (poppedNode !== null) {
      this.tail = poppedNode.prev;
      const tail = this.tail;
      if (tail) tail.next = null;
      poppedNode.prev = null;
    }
    if (this.length === 1) this.head = null;
    this.length--;
    return poppedNode;
  }

  shift(): ListNode<T> | null {
    const shiftedHead = this.head;
    if (shiftedHead == null) return null;
    const newHead = shiftedHead.next;
    if (newHead !== null) {
      this.head = newHead;
      newHead.prev = null;
    }
    shiftedHead.next = null;
    if (this.length === 1) this.tail = null;
    this.length--;
    return shiftedHead;
  }

  unshift(val: T): this {
    const newNode = new ListNode<T>(val);
    const head = this.head;
    if (head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      head.prev = newNode;
      newNode.next = head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx: i32): ListNode<T> | null {
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
    const setNode = this.get(idx) as ListNode<T>;
    setNode.val = val;
    return true;
  }

  insert(idx: i32, val: T): boolean {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new ListNode<T>(val);
    const nextNode = this.get(idx);
    if (nextNode !== null) {
      const prevNode = nextNode.prev;
      if (prevNode) prevNode.next = newNode;
      nextNode.prev = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
    }
    this.length++;
    return true;
  }

  remove(idx: i32): ListNode<T> | null {
    if (idx < 0 || idx >= this.length) return null;
    const removedNode = this.get(idx);
    if (removedNode !== null) {
      const prevNode = removedNode.prev;
      const nextNode = removedNode.next;
      if (prevNode) prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
      removedNode.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  reverse(): this {
    if (this.length === 1) return this;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode) {
        const temp = currentNode.next;
        currentNode.next = currentNode.prev;
        currentNode.prev = temp;
        currentNode = currentNode.next;
      }
    }

    return this;
  }
}
