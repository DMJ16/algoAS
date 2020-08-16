export function kmpSearch(str1: string, str2: string): i32 {
  let match = 0;
  let len1 = str1.length;
  let i = 0;
  let j = str2.length;

  while (j <= len1) {
    if (str1.slice(i, j) == str2) match += 1;
    i += 1;
    j += 1;
  }

  return match as i32;
}
