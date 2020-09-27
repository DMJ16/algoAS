export class LRUCache {
  cache: Map<string, LRUNode> = new Map<string, LRUNode>();
  capacity: i32;
  currentSize: i32 = 0;
  mostRecentList: LRULinkedList = new LRULinkedList();
  constructor(capacity: i32) {
    this.capacity = capacity <= 1 ? 1 : capacity;
  }

  insertKeyValuePair(key: string, value: i32): void {
    if (this.cache.has(key) === false) {
      if (this.currentSize === this.capacity) this.removeLeastRecent();
      else this.currentSize++;
      this.cache.set(key, new LRUNode(key, value));
    } else {
      this.replaceKey(key, value);
    }
    this.updateMostRecent(this.cache.get(key));
  }

  getValueFromKey(key: string): i32 {
    if (this.cache.has(key) === false) {
      throw new Error("key not found in cache");
    }
    this.updateMostRecent(this.cache.get(key));
    return this.cache.get(key).value;
  }

  getMostRecentKey(): string | null {
    if (this.mostRecentList.head == null) return null;
    return this.mostRecentList.head.key;
  }

  removeLeastRecent(): void {
    const keyToRemove = this.mostRecentList.tail!.key;
    this.mostRecentList.pop();
    this.cache.delete(keyToRemove);
  }

  updateMostRecent(node: LRUNode): void {
    this.mostRecentList.unshift(node);
  }

  replaceKey(key: string, value: i32): void {
    if (this.cache.has(key) === false) {
      throw new Error("key not found in cache");
    }
    this.cache.get(key).value = value;
  }
}

class LRUNode {
  key: string;
  value: i32;
  next: LRUNode | null = null;
  prev: LRUNode | null = null;
  constructor(key: string, value: i32) {
    this.key = key;
    this.value = value;
  }

  removeBindings(): void {
    const prev = this.prev;
    const next = this.next;
    if (prev != null) prev.next = this.next;
    if (next != null) next.prev = this.prev;
    this.prev = null;
    this.next = null;
  }
}

class LRULinkedList {
  head: LRUNode | null = null;
  tail: LRUNode | null = null;

  unshift(node: LRUNode): void {
    if (this.head === node) {
      return;
    } else if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      const tail = this.tail;
      if (tail) tail.prev = node;
      this.head = node;
      const head = this.head;
      if (head) head.next = this.tail;
    } else {
      if (this.tail === node) this.pop();
      node.removeBindings();
      const head = this.head;
      if (head) head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  pop(): void {
    if (this.tail == null) return;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return;
    }
    const oldTail = this.tail;
    if (oldTail) this.tail = oldTail.prev;
    const newTail = this.tail!;
    newTail.next = null;
  }
}
