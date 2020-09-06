export function radixSort(arr: i32[]): i32[] {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    const buckets: i32[][] = new Array<i32[]>(10);
    for (let i = 0; i < buckets.length; ++i) {
      buckets[i] = [] as i32[];
    }
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i] as i32);
    }
    arr = buckets.flat() as i32[];
  }
  return arr;
}

function getDigit(num: i32, i: i32): i32 {
  return (Math.floor(Math.abs(num) / Math.pow(10, i)) % 10) as i32;
}

function digitCount(num: i32): i32 {
  if (num === 0) return 1;
  return (Math.floor(Math.log10(Math.abs(num))) + 1) as i32;
}

function mostDigits(arr: i32[]): i32 {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i])) as i32;
  }
  return max;
}
