import {
  kadanesAlgo,
  spiralTraversal,
  isValidSubsequence,
  searchInSortedMatrix,
  riverSizes,
} from "../arrays";
import {
  Node,
  Stack,
  Queue,
  LinkedList,
  DoublyLinkedList,
  ListNode,
  HashTable,
  BST,
  MaxBinaryHeap,
  PriorityQueue,
  Graph,
} from "../dataStructures";
import { levenshteinDistance } from "../dp";
import {
  fib,
  factorial,
  fibExp,
  getPrimes,
  specialPythagoreanTriplet,
} from "../math";
import { binarySearch, kmpSearch } from "../search";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
  radixSort,
  topologicalSort,
} from "../sorting";

describe("array algorithms", () => {
  test("kadane's algorithm", () => {
    expect(
      kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
    ).toBe(19);

    expect(kadanesAlgo([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).toBe(-1);
  });

  test("spiral traversal", () => {
    expect(
      spiralTraversal([
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    expect(
      spiralTraversal([
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7],
      ])
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  test("isValidSubsequence", () => {
    expect(
      isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
    ).toBeTruthy();

    expect(isValidSubsequence([1], [1])).toBeTruthy();

    expect(isValidSubsequence([], [])).toBeTruthy();

    expect(
      isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1])
    ).toBeFalsy();
  });

  test("searchInSortedMatrix", () => {
    expect(
      searchInSortedMatrix(
        [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        44
      )
    ).toStrictEqual([3, 3]);

    expect(
      searchInSortedMatrix(
        [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        15
      )
    ).toStrictEqual([0, 4]);

    expect(searchInSortedMatrix([[]], 15)).toStrictEqual([-1, -1]);

    expect(
      searchInSortedMatrix(
        [
          [16, 17],
          [18, 19],
        ],
        15
      )
    ).toStrictEqual([-1, -1]);
  });

  test("riverSizes", () => {
    expect(
      riverSizes([
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0],
      ])
    ).toStrictEqual([2, 1, 5, 2, 2]);

    expect(
      riverSizes([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toStrictEqual([]);
  });
});

const stack: Stack<i32> = new Stack<i32>();
const queue: Queue<i32> = new Queue<i32>();
const list: LinkedList<i32> = new LinkedList<i32>();
const dList: DoublyLinkedList<i32> = new DoublyLinkedList<i32>();
const table: HashTable = new HashTable();
const tree: BST = new BST();
const heap: MaxBinaryHeap = new MaxBinaryHeap();
const PQ: PriorityQueue<string> = new PriorityQueue<string>();
const graph: Graph = new Graph();
const dag: Graph = new Graph();
describe("data structures", () => {
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

  describe("HashTable", () => {
    test("set key-value pairs and retrieve values by key", () => {
      table.set("Skywalker", "Luke");
      table.set("Baggins", "Frodo");
      table.set("Wayne", "Bruce");
      table.set("Prince", "Diana");
      table.set("Kent", "Clark");
      expect(table.get("Skywalker")).toBe("Luke");
      expect(table.get("Baggins")).toBe("Frodo");
      expect(table.get("Wayne")).toBe("Bruce");
      expect(table.get("Prince")).toBe("Diana");
      expect(table.get("Kent")).toBe("Clark");
      expect(table.get("Stark")).toBeNull();
    });
    test("get keys array", () => {
      expect(table.keys()).toContain("Skywalker");
      expect(table.keys()).toContain("Baggins");
      expect(table.keys()).toContain("Wayne");
      expect(table.keys()).toContain("Prince");
      expect(table.keys()).toContain("Kent");
    });
    test("get values array", () => {
      expect(table.values()).toContain("Luke");
      expect(table.values()).toContain("Frodo");
      expect(table.values()).toContain("Bruce");
      expect(table.values()).toContain("Diana");
      expect(table.values()).toContain("Clark");
    });
  });

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

  describe("Graph", () => {
    test("add vertices", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");
      expect(graph.adjList.keys().length).toBe(6);
    });

    test("add edges", () => {
      graph.addEdge("A", "B", 4);
      graph.addEdge("A", "C", 2);
      graph.addEdge("B", "E", 3);
      graph.addEdge("C", "D", 2);
      graph.addEdge("C", "F", 4);
      graph.addEdge("D", "E", 3);
      graph.addEdge("D", "F", 1);
      graph.addEdge("E", "F", 1);
      expect(graph.adjList.get("A").length).toBe(2);
      expect(graph.adjList.get("B").length).toBe(2);
      expect(graph.adjList.get("E").length).toBe(3);
      expect(graph.adjList.get("C").length).toBe(3);
      expect(graph.adjList.get("D").length).toBe(3);
      expect(graph.adjList.get("F").length).toBe(3);
    });

    test("DFS traversal", () => {
      expect(graph.dfs("A")).toStrictEqual(["A", "C", "F", "E", "D", "B"]);
    });

    test("BFS traversal", () => {
      expect(graph.bfs("A")).toStrictEqual(["A", "B", "C", "E", "D", "F"]);
    });

    test("topological sort ", () => {
      dag.addVertex("A");
      dag.addVertex("B");
      dag.addVertex("C");
      dag.addVertex("D");
      dag.addVertex("E");
      dag.addVertex("F");
      dag.addVertex("G");
      dag.addEdge("A", "C", 1);
      dag.addEdge("A", "B", 1);
      dag.addEdge("A", "D", 1);
      dag.addEdge("C", "D", 1);
      dag.addEdge("D", "E", 1);
      dag.addEdge("E", "F", 1);
      dag.addEdge("B", "G", 1);
      expect(dag.topologicalSort()).toStrictEqual([
        "A",
        "B",
        "G",
        "C",
        "D",
        "E",
        "F",
      ]);
    });

    test("Dijkstra's Algorithm", () => {
      expect(graph.dijkstra("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
    });

    test("remove edges", () => {
      graph.removeEdge("A", "B");
      graph.removeEdge("A", "C");
      graph.removeEdge("B", "E");
      graph.removeEdge("C", "D");
      graph.removeEdge("C", "F");
      graph.removeEdge("D", "E");
      graph.removeEdge("D", "F");
      graph.removeEdge("E", "F");
      expect(graph.adjList.get("A").length).toBe(0);
      expect(graph.adjList.get("B").length).toBe(0);
      expect(graph.adjList.get("E").length).toBe(0);
      expect(graph.adjList.get("C").length).toBe(0);
      expect(graph.adjList.get("D").length).toBe(0);
      expect(graph.adjList.get("F").length).toBe(0);
    });

    test("remove vertices and edges", () => {
      graph.removeVertex("A");
      graph.removeVertex("B");
      graph.removeVertex("C");
      graph.removeVertex("D");
      graph.removeVertex("E");
      expect(graph.removeVertex("F")).toBe(0);
    });
  });
});

describe("dynamic programming", () => {
  test("levenshtein distance", () => {
    expect(levenshteinDistance("abc", "yabd")).toBe(2);
    expect(levenshteinDistance("abc", "abc")).toBe(0);
    expect(levenshteinDistance("xabc", "abcx")).toBe(2);
    expect(levenshteinDistance("abc", "xyz")).toBe(3);
    expect(levenshteinDistance("horse", "ros")).toBe(3);
  });
});

describe("math algorithms", () => {
  test("factorials", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });

  test("get nth fib iterative", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
    expect(fib(7)).toBe(13);
  });

  test("get nth fib exponential", () => {
    expect(fibExp(0)).toBe(0);
    expect(fibExp(1)).toBe(1);
    expect(fibExp(2)).toBe(1);
    expect(fibExp(3)).toBe(2);
    expect(fibExp(4)).toBe(3);
    expect(fibExp(5)).toBe(5);
    expect(fibExp(6)).toBe(8);
    expect(fibExp(7)).toBe(13);
  });

  test("get primes", () => {
    expect(getPrimes(5)).toStrictEqual([2, 3, 5]);
    expect(getPrimes(20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(getPrimes(50)).toStrictEqual([
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
    ]);
  });

  test("special pythagorean triplet where a + b + c === 1000", () => {
    expect(specialPythagoreanTriplet()).toBe(31875000);
  });
});

describe("search algorithms", () => {
  test("KnuthMorrisPratt algorithm", () => {
    expect(kmpSearch("hannahhahhahahahhahahahannah", "hannah")).toBe(2);
    expect(kmpSearch("hannahhahhahahahhahahahannah", "dsds")).toBe(0);
    expect(kmpSearch("hannahhahhahahahhahahahannah", "ha")).toBe(9);
  });

  test("binarySearch", () => {
    expect(binarySearch([1, 2, 58, 99, 100], 100)).toBe(4);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13)).toBe(4);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1000)).toBe(-1);
    expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)).toBe(-1);
  });
});

describe("sorting algorithms", () => {
  test("bubbleSort", () => {
    expect(bubbleSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([
      2,
      3,
      5,
      5,
      6,
      8,
      9,
    ]);
  });

  test("insertionSort", () => {
    expect(insertionSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([
      2,
      3,
      5,
      5,
      6,
      8,
      9,
    ]);
  });

  test("selectionSort", () => {
    expect(selectionSort([8, 5, 2, 9, 5, 6, 3])).toStrictEqual([
      2,
      3,
      5,
      5,
      6,
      8,
      9,
    ]);
  });

  test("quickSort", () => {
    expect(quickSort([100, 200, 300, 400])).toStrictEqual([100, 200, 300, 400]);
    expect(quickSort([-3, 4, 0, -2, 6, -1])).toStrictEqual([
      -3,
      -2,
      -1,
      0,
      4,
      6,
    ]);
    expect(quickSort([1, 4, 2, 10, 23, 3, 1, 0, 20])).toStrictEqual([
      0,
      1,
      1,
      2,
      3,
      4,
      10,
      20,
      23,
    ]);
  });

  test("mergeSort", () => {
    expect(mergeSort([100, 200, 300, 400])).toStrictEqual([100, 200, 300, 400]);
    expect(mergeSort([-3, 4, 0, -2, 6, -1])).toStrictEqual([
      -3,
      -2,
      -1,
      0,
      4,
      6,
    ]);
    expect(mergeSort([1, 4, 2, 10, 23, 3, 1, 0, 20])).toStrictEqual([
      0,
      1,
      1,
      2,
      3,
      4,
      10,
      20,
      23,
    ]);
  });

  test("radixSort", () => {
    expect(radixSort([100, 200, 300, 400])).toStrictEqual([100, 200, 300, 400]);
    expect(radixSort([1, 4, 2, 10, 23, 3, 1, 0, 20])).toStrictEqual([
      0,
      1,
      1,
      2,
      3,
      4,
      10,
      20,
      23,
    ]);
  });

  test("topological sort", () => {
    expect(
      topologicalSort(
        [1, 2, 3, 4],
        [
          [1, 2],
          [1, 3],
          [3, 2],
          [4, 2],
          [4, 3],
        ]
      )
    ).toStrictEqual([4, 1, 3, 2]);
  });
});
