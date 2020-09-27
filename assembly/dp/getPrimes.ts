export function getPrimes(max: i32): i32[] {
  const primes: boolean[] = new Array<boolean>(max + 1);

  for (let i = 2; i <= max; i++) {
    primes[i] = true;
  }
  for (let i = 2; i <= max; i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= max; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes
    .map<i32>((isPrime, i) => {
      if (isPrime) return i;
      return 0;
    })
    .filter((num) => num !== 0);
}
