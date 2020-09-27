export function factorialRecursive(num: i32): i32 {
  return num <= 1 ? 1 : num * factorialRecursive(num - 1);
}

export function factorialIter(num: i32): i32 {
  let factorial = 1;
  if (num === 0 || num === 1) {
    return factorial;
  } else {
    for (let i = num; i > 1; i--) {
      factorial *= i;
    }
    return factorial;
  }
}
