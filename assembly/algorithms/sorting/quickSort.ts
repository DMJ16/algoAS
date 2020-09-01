export function quickSort(
  arr: i32[],
  left: i32 = 0,
  right: i32 = arr.length - 1
): i32[] {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

function pivot(
  arr: i32[],
  start: i32 = Math.floor(arr.length / 2) as i32,
  end: i32 = arr.length - 1
): i32 {
  let pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      swap(i, pivotIdx, arr);
    }
  }
  swap(start, pivotIdx, arr);
  return pivotIdx;
}

function swap(i: i32, j: i32, arr: i32[]): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
