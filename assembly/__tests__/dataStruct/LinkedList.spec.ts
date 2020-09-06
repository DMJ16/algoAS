import { LinkedList, Node } from "../../dataStructures";

const list: LinkedList<i32> = new LinkedList<i32>();
describe("LinkedList", () => {
  test("push, insert and get new nodes", () => {
    list.push(6);
    list.push(36);
    list.insert(2, 30);
    list.push(100);
    expect(list.len).toBe(4);
    expect((list.head as Node<i32>).val).toBe(6);
    expect((list.tail as Node<i32>).val).toBe(100);
    expect((list.get(1) as Node<i32>).val).toBe(36);
    expect((list.get(2) as Node<i32>).val).toBe(30);
  });

  test("set node", () => {
    expect(list.set(3, 101)).toBe(true);
    expect((list.tail as Node<i32>).val).toBe(101);
    expect(list.set(3, 100)).toBe(true);
    expect((list.tail as Node<i32>).val).toBe(100);
  });

  test("remove and pop nodes", () => {
    const removedNode = list.remove(1);
    expect((removedNode as Node<i32>).val).toBe(36);
    expect<Node<i32> | null>((removedNode as Node<i32>).next).toBeNull();
    const poppedNode = list.pop();
    expect((poppedNode as Node<i32>).val).toBe(100);
    expect(list.len).toBe(2);
    list.push(100);
  });

  test("shift and unshift nodes", () => {
    list.unshift(50000);
    list.shift();
    expect(list.len).toBe(3);
    expect((list.head as Node<i32>).val).toBe(6);
    list.unshift(50000);
    expect(list.len).toBe(4);
    expect((list.head as Node<i32>).val).toBe(50000);
  });

  test("reverse list and shift nodes", () => {
    list.reverse();
    expect((list.shift() as Node<i32>).val).toBe(100);
    expect((list.shift() as Node<i32>).val).toBe(30);
    expect((list.shift() as Node<i32>).val).toBe(6);
    expect((list.shift() as Node<i32>).val).toBe(50000);
  });
});
