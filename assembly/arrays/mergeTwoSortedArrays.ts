export function mergeTwoSortedArrays(
  nums1: i32[],
  m: i32,
  nums2: i32[],
  n: i32
): void {
  let insertIdx = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertIdx--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
}
