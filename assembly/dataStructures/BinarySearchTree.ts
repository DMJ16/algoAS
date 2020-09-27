class TreeNode {
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(public val: i32) {}
}

export class BST {
  root: TreeNode | null = null;

  insert(val: i32): this | null {
    const newNode = new TreeNode(val);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return null;
      if (val < currentNode.val) {
        if (currentNode.left == null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  search(val: i32): boolean {
    if (this.root == null) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left == null) return false;
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        if (currentNode.right == null) return false;
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs(): i32[] | null {
    let currentNode = this.root;
    if (currentNode == null) return null;
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

  _invertHelper(node: TreeNode | null): void {
    if (node == null) return;
    const left = node.left;
    node.left = node.right;
    node.right = left;
    this._invertHelper(node.left);
    this._invertHelper(node.right);
  }

  invert(): void {
    this._invertHelper(this.root);
  }

  dfsPreOrder(): i32[] | null {
    let currentNode = this.root;
    if (currentNode == null) return null;
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

  dfsInOrder(): i32[] | null {
    let currentNode = this.root;
    if (currentNode == null) return null;
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

  dfsPostOrder(): i32[] | null {
    let currentNode = this.root;
    if (currentNode == null) return null;
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

  _maxDepthHelper(node: TreeNode | null): i32 {
    if (node == null) return 0;
    return (
      i32(
        Math.max(
          this._maxDepthHelper(node.left),
          this._maxDepthHelper(node.right)
        )
      ) + 1
    );
  }
  maxDepth(): i32 {
    return this._maxDepthHelper(this.root);
  }
}
