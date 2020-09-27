export function kadanesAlgo(arr: i32[]): i32 {
  let localMax = arr[0];
  let globalMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentNum = arr[i];
    localMax = Math.max(currentNum, localMax + currentNum) as i32;
    globalMax = Math.max(globalMax, localMax) as i32;
  }

  return globalMax;
}
