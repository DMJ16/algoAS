import { BST } from "../../dataStructures";

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
