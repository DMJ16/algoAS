import { PriorityQueue } from "./PriorityQueue";

class GraphNode {
  vertex: string;
  weight: i32;
  constructor(v: string, w: i32) {
    this.vertex = v;
    this.weight = w;
  }
}

export class Graph {
  adjList: Map<string, GraphNode[]> = new Map<string, GraphNode[]>();

  addVertex(v: string): i32 {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
    return this.adjList.size;
  }

  addEdge(v1: string, v2: string, weight: i32): bool {
    const len1 = this.adjList.get(v1).length;
    const len2 = this.adjList.get(v2).length;
    if (this.adjList.has(v1) && this.adjList.has(v2)) {
      this.adjList.get(v1).push(new GraphNode(v2, weight));
      this.adjList.get(v2).push(new GraphNode(v1, weight));
    }
    return (
      len1 < this.adjList.get(v1).length && len2 < this.adjList.get(v2).length
    );
  }

  removeEdge(v1: string, v2: string): bool {
    const len1 = this.adjList.get(v1).length;
    const len2 = this.adjList.get(v2).length;

    if (this.adjList.has(v1) && this.adjList.has(v2)) {
      if (this.adjList.get(v1).length) {
        const arr = this.adjList.get(v1);
        const newArr: GraphNode[] = [];
        for (let i = 0; i < arr.length; i++) {
          const edge = arr[i];
          if (edge.vertex !== v2) newArr.push(edge);
        }
        this.adjList.set(v1, newArr);
      }

      if (this.adjList.get(v2).length) {
        const arr = this.adjList.get(v2);
        const newArr: GraphNode[] = [];
        for (let i = 0; i < arr.length; i++) {
          const edge = arr[i];
          if (edge.vertex !== v1) newArr.push(edge);
        }
        this.adjList.set(v2, newArr);
      }
    }
    return (
      len1 > this.adjList.get(v1).length && len2 > this.adjList.get(v2).length
    );
  }

  removeVertex(v: string): i32 {
    if (this.adjList.has(v)) {
      const arr = this.adjList.get(v);
      for (let i = 0; i < arr.length; i++) {
        this.removeEdge(v, arr[i].vertex);
      }
      this.adjList.delete(v);
    }
    return this.adjList.size;
  }

  dfs(startVertex: string): string[] {
    const stack = [startVertex];
    const data: string[] = [];
    const visited = new Map<string, bool>();
    let currentVertex: string;
    visited.set(startVertex, true);
    while (stack.length) {
      currentVertex = stack.pop();
      data.push(currentVertex);
      const list = this.adjList.get(currentVertex);
      for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (!visited.has(edge.vertex)) {
          visited.set(edge.vertex, true);
          stack.push(edge.vertex);
        }
      }
    }
    return data;
  }

  bfs(startVertex: string): string[] {
    const queue = [startVertex];
    const data: string[] = [];
    const visited = new Map<string, bool>();
    let currentVertex: string;
    visited.set(startVertex, true);
    while (queue.length) {
      currentVertex = queue.shift();
      data.push(currentVertex);
      const list = this.adjList.get(currentVertex);
      for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (!visited.has(edge.vertex)) {
          visited.set(edge.vertex, true);
          queue.push(edge.vertex);
        }
      }
    }
    return data;
  }

  topologicalSort(): string[] {
    let stack: string[] = [];
    const data: string[] = [];
    const visited: Set<string> = new Set<string>();
    let currentVertex: string;

    for (let i = 0; i < this.adjList.size; i++) {
      currentVertex = this.adjList.keys()[i];
      if (!visited.has(currentVertex)) {
        stack = this.topologicalHelper(currentVertex, visited, stack);
      }
    }

    while (stack.length) {
      data.push(stack.pop());
    }

    return data;
  }

  topologicalHelper(
    currentVertex: string,
    visited: Set<string>,
    stack: string[]
  ): string[] {
    visited.add(currentVertex);
    for (let i = 0; i < this.adjList.get(currentVertex).length; i++) {
      const neighbor = this.adjList.get(currentVertex)[i];
      if (!visited.has(neighbor.vertex)) {
        this.topologicalHelper(neighbor.vertex, visited, stack);
      }
    }
    stack.push(currentVertex);
    return stack;
  }

  Dijkstra(start: string, end: string): string[] {
    const distances = new Map<string, i32>();
    const prev = new Map<string, string>();
    const PQ = new PriorityQueue<string>();
    const path: string[] = [];
    let smallest: string = "-1";

    for (let i = 0; i < this.adjList.keys().length; i++) {
      const v = this.adjList.keys()[i];
      if (v === start) {
        distances.set(v, 0);
        PQ.enqueue(v, 0);
      } else {
        distances.set(v, I32.MAX_VALUE);
        PQ.enqueue(v, I32.MAX_VALUE);
      }
      prev.set(v, "-1");
    }

    while (PQ.values.length) {
      smallest = PQ.dequeue().val;
      if (smallest === end) {
        while (prev.get(smallest) !== "-1") {
          path.push(smallest);
          smallest = prev.get(smallest);
        }
        break;
      }

      if (smallest !== "-1" || distances.get(smallest) !== I32.MAX_VALUE) {
        for (let i = 0; i < this.adjList.get(smallest).length; i++) {
          let nextNode = this.adjList.get(smallest)[i];
          let newDistance = distances.get(smallest) + nextNode.weight;
          let nextNeighbor = nextNode.vertex;
          let distNextNeighbor = distances.get(nextNeighbor);
          if (newDistance < distNextNeighbor) {
            distances.set(nextNeighbor, newDistance);
            prev.set(nextNeighbor, smallest);
            PQ.enqueue(nextNeighbor, newDistance);
          }
        }
      }
    }

    return path.concat([smallest]).reverse();
  }
}
