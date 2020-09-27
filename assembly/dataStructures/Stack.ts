import { Node } from "./Node";

export class Stack<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  size: i32 = 0;

  push(val: T): i32 {
    const newNode = new Node<T>(val);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop(): Node<T> | null {
    const popNode = this.first;
    if (popNode == null) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = popNode.next;
    this.size--;
    return popNode;
  }
}
