import { Queue, Node } from "../../dataStructures";

const queue: Queue<i32> = new Queue<i32>();
describe("Queue", () => {
  test("dequeue empty queue returns null", () => {
    expect(queue.dequeue()).toBeFalsy();
  });

  test("enqueue node", () => {
    expect(queue.enqueue(5)).toBe(1);
    expect(queue.enqueue(3)).toBe(2);
    expect(queue.enqueue(1)).toBe(3);
  });

  test("dequeue node", () => {
    expect((queue.dequeue() as Node<i32>).val).toBe(5);
    expect((queue.dequeue() as Node<i32>).val).toBe(3);
    expect((queue.dequeue() as Node<i32>).val).toBe(1);
  });
});