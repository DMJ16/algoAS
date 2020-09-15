export function levenshteinDist(str1: string, str2: string): i32 {
  const len1: i32 = str1.length;
  const len2: i32 = str2.length;
  let pd: Array<Array<i32>> = new Array(len1 + 1);
  for (let i = 0; i <= len1; i++) {
    pd[i] = new Array(len2);
    pd[i].fill(0);
  }
  for (let j = 0; j <= len2; j++) {
    pd[0][j] = j;
  }
  for (let i = 0; i <= len1; i++) {
    pd[i][0] = i;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
        pd[i][j] = pd[i - 1][j - 1];
      } else {
        const temp = Math.min(pd[i - 1][j - 1], pd[i - 1][j]);
        pd[i][j] = (Math.min(temp, pd[i][j - 1]) as i32) + 1;
      }
    }
  }
  return pd[len1][len2];
}
