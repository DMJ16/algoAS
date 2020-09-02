class PQNode<T> {
  val: T;
  priority: i32;
  constructor(val: T, priority: i32) {
    this.val = val;
    this.priority = priority;
  }
}

export class PriorityQueue<T> {
  values: PQNode<T>[] = [];

  enqueue(val: T, priority: i32): void {
    const newNode = new PQNode<T>(val, priority);
    this.values.push(newNode);
    let i = this.values.length - 1;
    let currentNode = this.values[i];
    let parentIdx: i32;
    let parent: PQNode<T>;

    while (i > 0) {
      parentIdx = Math.floor((i - 1) / 2) as i32;
      parent = this.values[parentIdx];
      if (currentNode.priority >= parent.priority) break;
      this.values[i] = parent;
      this.values[parentIdx] = currentNode;
      i = parentIdx;
    }
  }

  dequeue(): PQNode<T> {
    const min = this.values[0];
    const end = this.values[this.values.length - 1];
    if (end instanceof PQNode && this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown(): void {
    let i = 0;
    const sinkNode = this.values[i];
    let leftChildIdx: i32;
    let rightChildIdx: i32;
    let left: PQNode<T>;
    let right: PQNode<T>;
    let swap: boolean;
    let swapIdx: i32 = 0;

    while (true) {
      leftChildIdx = 2 * (i + 1);
      rightChildIdx = 2 * (i + 2);
      swap = false;

      if (leftChildIdx < this.values.length) {
        left = this.values[leftChildIdx];
        if (sinkNode.priority > left.priority) {
          swapIdx = leftChildIdx;
          swap = true;
        }
      }

      if (rightChildIdx < this.values.length) {
        right = this.values[rightChildIdx];
        if (
          (swap && right.priority < this.values[leftChildIdx].priority) ||
          (!swap && right.priority < sinkNode.priority)
        ) {
          swapIdx = rightChildIdx;
          swap = true;
        }
      }

      if (!swap) break;
      const temp = this.values[i];
      this.values[i] = this.values[swapIdx];
      this.values[swapIdx] = temp;
      i = swapIdx;
    }
  }
}
