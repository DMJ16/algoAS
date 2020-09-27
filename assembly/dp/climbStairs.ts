export function climbStairs(steps: i32): i32 {
  const result: i32[] = [0, 1];
  let count = 2;
  while (count <= steps) {
    const newMax = result[0] + result[1];
    result[0] = result[1];
    result[1] = newMax;
    count++;
  }
  return steps >= 1 ? result[1] : result[0];
}

export function climbStairsMemo(
  steps: i32,
  memo: Map<i32, i32> = new Map()
): i32 {
  memo.set(0, 0);
  memo.set(1, 1);
  if (memo.has(steps)) {
    return memo.get(steps);
  } else {
    memo.set(
      steps,
      climbStairsMemo(steps - 1, memo) + climbStairsMemo(steps - 2, memo)
    );
    return memo.get(steps);
  }
}
