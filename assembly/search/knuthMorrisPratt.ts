export function kmpSearch(str1: string, substr: string): i32 {
  let match: i32 = 0;
  let len1 = str1.length;
  let i = 0;
  let j = substr.length;

  while (j <= len1) {
    if (str1.slice(i, j) == substr) match++;
    i++;
    j++;
  }

  return match;
}
