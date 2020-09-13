import { fib, factorial, fibExp } from "../../math";

describe("math algorithms", () => {
  test("factorials", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });

  test("get nth fib iterative", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
    expect(fib(7)).toBe(13);
  });

  test("get nth fib exponential", () => {
    expect(fibExp(0)).toBe(0);
    expect(fibExp(1)).toBe(1);
    expect(fibExp(2)).toBe(1);
    expect(fibExp(3)).toBe(2);
    expect(fibExp(4)).toBe(3);
    expect(fibExp(5)).toBe(5);
    expect(fibExp(6)).toBe(8);
    expect(fibExp(7)).toBe(13);
  });
});
