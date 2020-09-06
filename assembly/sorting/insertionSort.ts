export function insertionSort(arr: i32[]): i32[] {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(j, j - 1, arr);
      j--;
    }
  }
  return arr;
}

function swap(i: i32, j: i32, arr: i32[]): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
