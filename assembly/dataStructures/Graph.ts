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
    if (this.adjList.has(v) === false) {
      this.adjList.set(v, []);
    }
    return this.adjList.size;
  }

  addEdge(v1: string, v2: string, weight: i32): void {
    if (this.adjList.has(v1) && this.adjList.has(v2)) {
      this.adjList.get(v1).push(new GraphNode(v2, weight));
      this.adjList.get(v2).push(new GraphNode(v1, weight));
    } else {
      throw new Error("one or more vertex not found in Graph");
    }
  }

  removeEdge(v1: string, v2: string): void {
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
    } else {
      throw new Error("one or more vertex not found in Graph");
    }
  }

  removeVertex(v: string): bool {
    if (this.adjList.has(v)) {
      const arr = this.adjList.get(v);
      for (let i = 0; i < arr.length; i++) {
        this.removeEdge(v, arr[i].vertex);
      }
      this.adjList.delete(v);
      return true;
    }
    return false;
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
        if (visited.has(edge.vertex) === false) {
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
        if (visited.has(edge.vertex) === false) {
          visited.set(edge.vertex, true);
          queue.push(edge.vertex);
        }
      }
    }
    return data;
  }

  _topologicalHelper(
    currentVertex: string,
    visited: Set<string>,
    stack: string[]
  ): string[] {
    visited.add(currentVertex);
    for (let i = 0; i < this.adjList.get(currentVertex).length; i++) {
      const neighbor = this.adjList.get(currentVertex)[i];
      if (visited.has(neighbor.vertex) === false) {
        this._topologicalHelper(neighbor.vertex, visited, stack);
      }
    }
    stack.push(currentVertex);
    return stack;
  }

  topologicalSort(): string[] {
    let stack: string[] = [];
    const data: string[] = [];
    const visited: Set<string> = new Set<string>();
    let currentVertex: string;

    for (let i = 0; i < this.adjList.size; i++) {
      currentVertex = this.adjList.keys()[i];
      if (visited.has(currentVertex) === false) {
        stack = this._topologicalHelper(currentVertex, visited, stack);
      }
    }

    while (stack.length) {
      data.push(stack.pop());
    }

    return data;
  }

  dijkstra(start: string, end: string): string[] {
    const path: string[] = [];
    const distances: Map<string, i32> = new Map<string, i32>();
    const prev: Map<string, string> = new Map<string, string>();
    const PQ: PriorityQueue<string> = new PriorityQueue<string>();
    let smallest: string = "";

    for (let i = 0; i < this.adjList.keys().length; i++) {
      const vertex = this.adjList.keys()[i];
      if (vertex === start) {
        distances.set(vertex, 0);
        PQ.enqueue(vertex, 0);
      } else {
        distances.set(vertex, i32.MAX_VALUE);
        PQ.enqueue(vertex, i32.MAX_VALUE);
      }
      prev.set(vertex, "");
    }

    while (PQ.values.length) {
      smallest = PQ.dequeue().val;
      if (smallest == end) {
        while (prev.get(smallest) != "") {
          path.push(smallest);
          smallest = prev.get(smallest);
        }
        break;
      }

      if (smallest != "" && distances.get(smallest) !== i32.MAX_VALUE) {
        for (let i = 0; i < this.adjList.get(smallest).length; i++) {
          const nextNode = this.adjList.get(smallest)[i];
          const newDistance = distances.get(smallest) + nextNode.weight;
          const nextNodeDistance = distances.get(nextNode.vertex);
          if (newDistance < nextNodeDistance) {
            distances.set(nextNode.vertex, newDistance);
            prev.set(nextNode.vertex, smallest);
            PQ.enqueue(nextNode.vertex, newDistance);
          }
        }
      }
    }

    return path.concat([smallest]).reverse();
  }
}
