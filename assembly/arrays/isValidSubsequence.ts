export function isValidSubsequence(arr: i32[], seq: i32[]): bool {
  let arrIdx: i32 = 0;
  let seqIdx: i32 = 0;
  while (arrIdx < arr.length && seqIdx < seq.length) {
    if (arr[arrIdx] === seq[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === seq.length;
}
