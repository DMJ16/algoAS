export function binarySearch(arr: i32[], val: i32): i32 {
  let len = arr.length;
  let left = 0;
  let right = len - 1;
  let mid = Math.floor(right / 2) as i32;

  while (mid !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2) as i32;
  }
  return arr[mid] === val ? mid : -1;
}
