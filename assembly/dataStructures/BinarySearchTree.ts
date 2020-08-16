class TreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(public val: i32) {}
}

export class BST {
  root: TreeNode | null = null;

  insert(val: i32): this | null {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return null;
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  search(val: i32): boolean {
    if (this.root === null) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS(): Array<i32> | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    let data: Array<i32> = [];
    let queue: TreeNode[] = [];

    let left: TreeNode | null;
    let right: TreeNode | null;

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      data.push(currentNode.val);

      left = currentNode.left;
      right = currentNode.right;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    return data;
  }

  traversePre(node: TreeNode, result: Array<i32>): void {
    const left = node.left;
    const right = node.right;
    result.push(node.val);
    if (left) this.traversePre(left, result);
    if (right) this.traversePre(right, result);
  }

  DFSPreOrder(): Array<i32> | null {
    if (!this.root) return null;
    let result: Array<i32> = [];
    this.traversePre(this.root as TreeNode, result);
    return result;
  }

  traverseInOrd(node: TreeNode, result: Array<i32>): void {
    const left = node.left;
    const right = node.right;
    if (left) this.traverseInOrd(left, result);
    result.push(node.val);
    if (right) this.traverseInOrd(right, result);
  }

  DFSInOrder(): Array<i32> | null {
    if (!this.root) return null;
    let result: Array<i32> = [];
    this.traverseInOrd(this.root as TreeNode, result);
    return result;
  }

  traversePost(node: TreeNode, result: Array<i32>): void {
    const left = node.left;
    const right = node.right;
    if (left) this.traversePost(left, result);
    if (right) this.traversePost(right, result);
    result.push(node.val);
  }

  DFSPostOrder(): Array<i32> | null {
    if (!this.root) return null;
    let result: Array<i32> = [];
    this.traversePost(this.root as TreeNode, result);
    return result;
  }
}
