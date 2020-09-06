export function selectionSort(arr: i32[]): i32[] {
  let startIdx = 0;

  while (startIdx < arr.length) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < arr.length; i++) {
      if (arr[smallestIdx] > arr[i]) smallestIdx = i;
    }
    swap(smallestIdx, startIdx, arr);
    startIdx++;
  }

  return arr;
}

function swap(i: i32, j: i32, arr: i32[]): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
