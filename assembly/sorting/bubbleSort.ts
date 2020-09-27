export function bubbleSort(arr: i32[]): i32[] {
  let isSorted = false;
  let counter = 0;

  while (isSorted === false) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        isSorted = false;
      }
    }
    counter++;
  }
  return arr;
}

function swap(i: i32, j: i32, arr: i32[]): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
