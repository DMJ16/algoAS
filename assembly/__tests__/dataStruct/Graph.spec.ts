import { Graph } from "../../dataStructures";

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
