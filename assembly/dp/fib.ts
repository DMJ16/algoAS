export function fibIter(n: i32): i32 {
  let x = 0;
  let y = 1;
  if (n > 0) {
    while (--n) {
      const t = x + y;
      x = y;
      y = t;
    }
    return y;
  }
  return x;
}

export function fibMemo(
  n: i32,
  memo: Map<i32, i32> = new Map<i32, i32>().set(0, 0).set(1, 1)
): i32 {
  if (memo.has(n)) {
    return memo.get(n);
  } else {
    memo.set(n, fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
    return memo.get(n);
  }
}

export function fibExp(n: i32): i32 {
  if (n === 0) {
    return n;
  }
  const sqrt = Math.sqrt(5);
  const phi = (1.0 + sqrt) / 2.0;
  const q = 1.0 / phi;
  return ((Math.pow(phi, n) + Math.pow(q, n)) / sqrt + 0.5) as i32;
}
