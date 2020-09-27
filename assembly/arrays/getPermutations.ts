export function getPermutations(arr: i32[]): i32[][] {
  const length = arr.length;
  const result: i32[][] = [arr.slice(0)];

  const temp: i32[] = new Array<i32>(length).fill(0);
  let idx: i32 = 1;
  let num: i32;
  let currentPerm: i32;

  while (idx < length) {
    if (temp[idx] < idx) {
      num = idx % 2 && temp[idx];
      currentPerm = arr[idx];
      arr[idx] = arr[num];
      arr[num] = currentPerm;
      ++temp[idx];
      idx = 1;
      result.push(arr.slice(0));
    } else {
      temp[idx] = 0;
      ++idx;
    }
  }
  return result;
}
