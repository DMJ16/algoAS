export function kadanesAlgo(arr: i32[]): i32 {
  let maxAtIdx = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    maxAtIdx = Math.max(num, maxAtIdx + num) as i32;
    currentMax = Math.max(currentMax, maxAtIdx) as i32;
  }

  return currentMax;
}
