import { DoublyLinkedList, ListNode } from "../../dataStructures";

const dList: DoublyLinkedList<i32> = new DoublyLinkedList<i32>();
describe("DoublyLinkedList", () => {
  test("push, insert and get new nodes", () => {
    dList.push(6);
    dList.push(36);
    dList.insert(2, 30);
    dList.push(100);
    expect(dList.len).toBe(4);
    expect((dList.head as ListNode<i32>).val).toBe(6);
    expect((dList.tail as ListNode<i32>).val).toBe(100);
    expect((dList.get(1) as ListNode<i32>).val).toBe(36);
    expect((dList.get(3) as ListNode<i32>).val).toBe(100);
  });

  test("set node", () => {
    expect(dList.set(3, 101)).toBe(true);
    expect((dList.tail as ListNode<i32>).val).toBe(101);
    expect(dList.set(3, 100)).toBe(true);
    expect((dList.tail as ListNode<i32>).val).toBe(100);
  });

  test("remove and pop nodes", () => {
    const removedNode = dList.remove(1);
    expect((removedNode as ListNode<i32>).val).toBe(36);
    expect<ListNode<i32> | null>(
      (removedNode as ListNode<i32>).next
    ).toBeNull();
    const poppedNode = dList.pop();
    expect((poppedNode as ListNode<i32>).val).toBe(100);
    expect(dList.len).toBe(2);
    dList.push(100);
  });

  test("shift and unshift nodes", () => {
    dList.unshift(50000);
    dList.shift();
    expect(dList.len).toBe(3);
    expect((dList.head as ListNode<i32>).val).toBe(6);
    dList.unshift(50000);
    expect(dList.len).toBe(4);
    expect((dList.head as ListNode<i32>).val).toBe(50000);
  });

  test("reverse list and shift nodes", () => {
    dList.reverse();
    expect((dList.shift() as ListNode<i32>).val).toBe(100);
    expect((dList.shift() as ListNode<i32>).val).toBe(30);
    expect((dList.shift() as ListNode<i32>).val).toBe(6);
    expect((dList.shift() as ListNode<i32>).val).toBe(50000);
  });
});
