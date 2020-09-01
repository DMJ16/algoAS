export function mergeSort(arr: i32[]): i32[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2) as i32;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1: i32[], arr2: i32[]): i32[] {
  const result: i32[] = [];
  const len1 = arr1.length,
    len2 = arr2.length;
  let i = 0,
    j = 0;

  while (i < len1 && j < len2) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < len1) {
    result.push(arr1[i]);
    i++;
  }

  while (j < len2) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
