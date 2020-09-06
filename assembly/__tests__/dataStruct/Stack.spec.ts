import { Stack, Node } from "../../dataStructures";

const stack: Stack<i32> = new Stack<i32>();
describe("Stack", () => {
  test("pop empty stack returns null", () => {
    expect(stack.pop()).toBeFalsy();
  });

  test("push node", () => {
    expect(stack.push(10)).toBe(1);
    expect(stack.push(100)).toBe(2);
    expect(stack.push(1)).toBe(3);
    expect(stack.push(5)).toBe(4);
    expect((stack.first as Node<i32>).val).toBe(5);
    expect((stack.last as Node<i32>).val).toBe(10);
  });

  test("pop node", () => {
    expect((stack.pop() as Node<i32>).val).toBe(5);
    expect((stack.pop() as Node<i32>).val).toBe(1);
  });
});
