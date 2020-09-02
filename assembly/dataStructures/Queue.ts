import { Node } from "./Node";

export class Queue<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  size: i32 = 0;

  enqueue(val: T): i32 {
    const newNode = new Node<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const last = this.last;
      if (last) last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(): Node<T> | null {
    const deqNode = this.first;
    if (!deqNode) return null;
    if (this.first === this.last) this.last = null;
    this.first = deqNode.next;
    this.size--;
    return deqNode;
  }
}
