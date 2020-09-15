export function levenshteinDistance(str1: string, str2: string): i32 {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits: i32[] = [];
  const oddEdits: i32[] = new Array(small.length + 1);

  for (let j = 0; j <= small.length; j++) {
    evenEdits.push(j);
  }

  for (let i = 1; i <= big.length; i++) {
    let currentEdits: i32[] = [];
    let prevEdits: i32[] = [];
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      prevEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      prevEdits = oddEdits;
    }
    currentEdits[0] = i;

    for (let j = 1; j <= small.length; j++) {
      if (big.charAt(i - 1) == small.charAt(j - 1)) {
        currentEdits[j] = prevEdits[j - 1];
      } else {
        const prev = Math.min(prevEdits[j - 1], prevEdits[j]);
        currentEdits[j] = (1 + Math.min(prev, currentEdits[j - 1])) as i32;
      }
    }
  }

  return big.length % 2 === 0
    ? evenEdits[small.length]
    : oddEdits[small.length];
}
