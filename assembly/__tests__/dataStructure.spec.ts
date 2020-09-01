import { BST, LinkedList, ListNode } from "../dataStructures";

const list: LinkedList<i32> = new LinkedList<i32>();
describe("LinkedList", () => {
  test("push, insert and get new nodes", () => {
    list.push(6);
    list.push(36);
    list.insert(2, 30);
    list.push(100);
    expect(list.len).toBe(4);
    expect((list.head as ListNode<i32>).val).toBe(6);
    expect((list.tail as ListNode<i32>).val).toBe(100);
    expect((list.get(1) as ListNode<i32>).val).toBe(36);
    expect((list.get(2) as ListNode<i32>).val).toBe(30);
  });

  test("remove and pop nodes", () => {
    const removedNode = list.remove(1);
    expect((removedNode as ListNode<i32>).val).toBe(36);
    expect((removedNode as ListNode<i32>).next).toBe(null);
    const poppedNode = list.pop();
    expect((poppedNode as ListNode<i32>).val).toBe(100);
    expect(list.len).toBe(2);
    list.push(100);
  });

  test("unshift nodes", () => {
    list.unshift(50000);
    expect(list.len).toBe(4);
    expect((list.head as ListNode<i32>).val).toBe(50000);
  });

  test("reverse list and shift nodes", () => {
    list.reverse();
    expect((list.shift() as ListNode<i32>).val).toBe(100);
    expect((list.shift() as ListNode<i32>).val).toBe(30);
    expect((list.shift() as ListNode<i32>).val).toBe(6);
    expect((list.shift() as ListNode<i32>).val).toBe(50000);
  });
});

const tree: BST = new BST();
describe("BinarySearchTree", () => {
  test("insert nodes and find by search", () => {
    tree.insert(100);
    tree.insert(1);
    tree.insert(600);
    tree.insert(300);
    tree.insert(20);
    tree.insert(5);
    expect(tree.search(100)).toBe(true);
    expect(tree.search(1)).toBe(true);
    expect(tree.search(600)).toBe(true);
    expect(tree.search(300)).toBe(true);
    expect(tree.search(20)).toBe(true);
    expect(tree.search(5)).toBe(true);
    expect(tree.search(500)).toBe(false);
    expect(tree.search(0)).toBe(false);
  });

  test("BFS traversal", () => {
    expect(tree.BFS()).toStrictEqual([100, 1, 600, 20, 300, 5]);
  });

  test("DFS PreOrder traversal", () => {
    expect(tree.DFSPreOrder()).toStrictEqual([100, 1, 20, 5, 600, 300]);
  });

  test("DFS InOrder traversal", () => {
    expect(tree.DFSInOrder()).toStrictEqual([1, 5, 20, 100, 300, 600]);
  });

  test("DFS PostOrder traversal", () => {
    expect(tree.DFSPostOrder()).toStrictEqual([5, 20, 1, 300, 600, 100]);
  });

  test("invert BST", () => {
    tree.invert(tree.root);
    expect(tree.BFS()).toStrictEqual([100, 600, 1, 300, 20, 5]);
  });
});
