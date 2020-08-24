import { BST } from "../dataStructures";

const tree: BST = new BST();

describe("BinarySearchTree", () => {
  beforeEach(() => {
    tree.insert(100);
    tree.insert(1);
    tree.insert(600);
    tree.insert(300);
    tree.insert(20);
    tree.insert(5);
  });

  it("inserts nodes", () => {
    expect(tree.search(100)).toBe(true);
    expect(tree.search(1)).toBe(true);
    expect(tree.search(600)).toBe(true);
    expect(tree.search(300)).toBe(true);
    expect(tree.search(20)).toBe(true);
    expect(tree.search(5)).toBe(true);
    expect(tree.search(500)).toBe(false);
    expect(tree.search(0)).toBe(false);
  });

  it("traverses tree using BFS", () => {
    expect(tree.BFS()).toStrictEqual([100, 1, 600, 20, 300, 5]);
  });

  it("traverses tree using DFSPreOrder", () => {
    expect(tree.DFSPreOrder()).toStrictEqual([100, 1, 20, 5, 600, 300]);
  });

  it("traverses tree using DFSInOrder", () => {
    expect(tree.DFSInOrder()).toStrictEqual([1, 5, 20, 100, 300, 600]);
  });

  it("traverses tree using DFSPostOrder", () => {
    expect(tree.DFSPostOrder()).toStrictEqual([5, 20, 1, 300, 600, 100]);
  });

  it("inverts all values in the tree", () => {
    tree.invert(tree.root);
    expect(tree.BFS()).toStrictEqual([100, 600, 1, 300, 20, 5]);
  });
});
