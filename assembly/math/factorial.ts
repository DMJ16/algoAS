export function factorial(n: i32): i32 {
  if (n === 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
