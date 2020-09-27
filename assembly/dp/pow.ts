export function pow(x: f64, n: f64): f64 {
  if (n < 0) {
    n = Math.abs(n);
    x = 1 / x;
  }

  if (n === 0) return 1;

  const half = pow(x, Math.floor(n / 2));

  return n % 2 === 0 ? half * half : half * half * x;
}

function powIter(x: f64, n: f64): f64 {
  let pow: f64 = 1;
  if (n < 0) {
    n = Math.abs(n);
    x = 1 / x;
  }
  for (let i = 0; i < Math.floor(n / 2); i++) {
    pow *= x;
  }
  return n % 2 === 0 ? pow * pow : pow * pow * x;
}
