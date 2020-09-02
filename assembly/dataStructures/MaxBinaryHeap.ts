export class MaxBinaryHeap {
  values: i32[] = [];

  insert(val: i32): void {
    this.values.push(val);

    let i = this.values.length - 1;
    const newVal = this.values[i];
    let parentIdx: i32;
    let parent: i32;

    while (i > 0) {
      parentIdx = Math.floor((i - 1) / 2) as i32;
      parent = this.values[parentIdx];
      if (newVal <= parent) break;
      this.values[i] = parent;
      this.values[parentIdx] = newVal;
      i = parentIdx;
    }
  }

  extractMax(): i32 {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown(): void {
    let i = 0;
    const temp = this.values[i];
    let leftChildIdx: i32;
    let rightChildIdx: i32;
    let left: i32;
    let right: i32;
    let swap: boolean;
    let swapIdx: i32 = 0;

    while (true) {
      leftChildIdx = 2 * i + 1;
      rightChildIdx = 2 * i + 2;
      swap = false;

      if (leftChildIdx < this.values.length) {
        left = this.values[leftChildIdx];
        if (temp < left) {
          swapIdx = leftChildIdx;
          swap = true;
        }
      }

      if (rightChildIdx < this.values.length) {
        right = this.values[rightChildIdx];
        if (
          (!swap && temp < right) ||
          (swap && right > this.values[leftChildIdx])
        ) {
          swapIdx = rightChildIdx;
          swap = true;
        }
      }

      if (!swap) break;
      this.values[i] = this.values[swapIdx];
      this.values[swapIdx] = temp;
      i = swapIdx;
    }
  }
}
