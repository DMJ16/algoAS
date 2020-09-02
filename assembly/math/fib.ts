export function fib(n: i32): i32 {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextNum = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextNum;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
