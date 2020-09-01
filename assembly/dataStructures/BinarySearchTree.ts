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

  BFS(): i32[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    let data: i32[] = [];
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

  invert(node: TreeNode | null): void {
    if (node === null) return;
    const left = node.left;
    node.left = node.right;
    node.right = left;
    this.invert(node.left);
    this.invert(node.right);
  }

  DFSPreOrder(): i32[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    const stack: TreeNode[] = [];
    const result: i32[] = [];
    stack.push(currentNode);
    while (stack.length > 0) {
      currentNode = stack.pop();
      result.push(currentNode.val);
      const right = currentNode.right;
      const left = currentNode.left;
      if (right) stack.push(right);
      if (left) stack.push(left);
    }
    return result;
  }

  DFSInOrder(): i32[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    const stack: TreeNode[] = [];
    const result: i32[] = [];
    while (stack.length !== 0 || currentNode !== null) {
      if (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop();
        result.push(currentNode.val);
        currentNode = currentNode.right;
      }
    }
    return result;
  }

  DFSPostOrder(): i32[] | null {
    let currentNode = this.root;
    if (!currentNode) return null;
    const stack: TreeNode[] = [];
    const result: i32[] = [];
    stack.push(currentNode);
    while (stack.length !== 0) {
      currentNode = stack.pop();
      result.unshift(currentNode.val);
      const left = currentNode.left;
      const right = currentNode.right;
      if (left) stack.push(left);
      if (right) stack.push(right);
    }
    return result;
  }
}
