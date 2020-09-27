export function isAnagram(str1: string, str2: string): bool {
  if (str1.length !== str2.length) return false;
  const map = new Map<string, i32>();
  for (let i = 0; i < str1.length; i++) {
    const char = str1.charAt(i);
    const count = map.has(char) ? map.get(char) + 1 : 1;
    map.set(char, count);
  }
  for (let j = 0; j < str2.length; j++) {
    const char = str2.charAt(j);
    if (map.has(char) === false) return false;
    const count = map.get(char) - 1;
    if (count === 0) {
      map.delete(char);
      continue;
    }
    map.set(char, count);
  }
  return map.size === 0;
}
