import {
  BST,
  LinkedList,
  DoublyLinkedList,
  ListNode,
  Stack,
  Queue,
  Node,
  MaxBinaryHeap,
  PriorityQueue,
  Graph,
} from "../dataStructures";

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

const heap: MaxBinaryHeap = new MaxBinaryHeap();
describe("MaxBinaryHeap", () => {
  test("insert nodes into heap", () => {
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    heap.insert(55);
    heap.insert(1);
    expect(heap.values.length).toBe(8);
    expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33, 1]);
  });

  test("extract max value from heap", () => {
    expect(heap.extractMax()).toBe(55);
    expect(heap.values).toStrictEqual([41, 39, 33, 18, 27, 12, 1]);
  });
});

const PQ: PriorityQueue<string> = new PriorityQueue<string>();
describe("PriorityQueue", () => {
  test("enqueue nodes", () => {
    PQ.enqueue("entree", 3);
    expect(PQ.values.length).toBe(1);
    PQ.enqueue("appetizer", 4);
    expect(PQ.values.length).toBe(2);
    PQ.enqueue("dessert", 5);
    expect(PQ.values.length).toBe(3);
    PQ.enqueue("drink", 2);
    expect(PQ.values.length).toBe(4);
    PQ.enqueue("special", 1);
    expect(PQ.values.length).toBe(5);
  });

  test("dequeue nodes", () => {
    const dequeue = PQ.dequeue();
    expect(dequeue.val).toBe("special");
    expect(dequeue.priority).toBe(1);
  });
});

const graph: Graph = new Graph();
describe("Graph", () => {
  test("remove vertices and remove edges", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.adjList.size).toBe(3);
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    expect(graph.adjList.size).toBe(6);
    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    expect(graph.removeEdge("A", "B")).toBe(true);
    expect(graph.removeEdge("A", "C")).toBe(true);
    expect(graph.removeEdge("B", "E")).toBe(true);
    expect(graph.removeEdge("C", "D")).toBe(true);
    expect(graph.removeVertex("A")).toBe(5);
    expect(graph.removeVertex("B")).toBe(4);
    expect(graph.removeVertex("C")).toBe(3);
    expect(graph.removeVertex("D")).toBe(2);
    expect(graph.removeVertex("E")).toBe(1);
    expect(graph.removeVertex("F")).toBe(0);
  });

  test("add vertices", () => {
    expect(graph.addVertex("A")).toBe(1);
    expect(graph.addVertex("B")).toBe(2);
    expect(graph.addVertex("C")).toBe(3);
    expect(graph.addVertex("D")).toBe(4);
    expect(graph.addVertex("E")).toBe(5);
    expect(graph.addVertex("F")).toBe(6);
  });

  test("add edges", () => {
    expect(graph.addEdge("A", "B", 4)).toBe(true);
    expect(graph.addEdge("A", "C", 2)).toBe(true);
    expect(graph.addEdge("B", "E", 3)).toBe(true);
    expect(graph.addEdge("C", "D", 2)).toBe(true);
    expect(graph.addEdge("C", "F", 4)).toBe(true);
    expect(graph.addEdge("D", "E", 3)).toBe(true);
    expect(graph.addEdge("D", "F", 1)).toBe(true);
    expect(graph.addEdge("E", "F", 1)).toBe(true);
  });

  test("DFS traversal", () => {
    expect(graph.DFS("A")).toStrictEqual(["A", "C", "F", "E", "D", "B"]);
  });

  test("BFS traversal", () => {
    expect(graph.BFS("A")).toStrictEqual(["A", "B", "C", "E", "D", "F"]);
  });

  test("Dijkstra's Algorithm", () => {
    expect(graph.Dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
  });
});
