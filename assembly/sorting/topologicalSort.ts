export function topologicalSort(jobs: i32[], deps: i32[][]): i32[] {
  const graph = createJobGraph(jobs, deps);
  return getOrderedJobs(graph);
}

function createJobGraph(jobs: i32[], deps: i32[][]): JobGraph {
  const graph = new JobGraph(jobs);
  for (let i = 0; i < deps.length; i++) {
    const job = deps[i][0];
    const dep = deps[i][1];
    graph.addDep(job, dep);
  }
  return graph;
}
function getOrderedJobs(graph: JobGraph): i32[] {
  const orderedJobs: i32[] = [];
  const noReqNodes = graph.nodes.filter((node) => !node.reqsCount);
  while (noReqNodes.length) {
    const node = noReqNodes.pop();
    orderedJobs.push(node.job);
    removeDeps(node, noReqNodes);
  }
  const edges = graph.nodes.some((node) => node.reqsCount as bool);
  return edges ? [] : orderedJobs;
}
function removeDeps(node: JobNode, noReqNodes: JobNode[]): void {
  while (node.deps.length) {
    const dep = node.deps.pop();
    dep.reqsCount--;
    if (dep.reqsCount === 0) noReqNodes.push(dep);
  }
}

class JobNode {
  job: i32;
  deps: JobNode[] = [];
  reqsCount: i32 = 0;
  constructor(job: i32) {
    this.job = job;
  }
}

class JobGraph {
  nodes: JobNode[] = [];
  graph: Map<i32, JobNode> = new Map();
  constructor(jobs: i32[]) {
    for (let i = 0; i < jobs.length; i++) {
      this.addNode(jobs[i]);
    }
  }

  addDep(job: i32, dep: i32): void {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.deps.push(depNode);
    depNode.reqsCount++;
  }

  addNode(job: i32): void {
    this.graph.set(job, new JobNode(job));
    this.nodes.push(this.graph.get(job));
  }

  getNode(job: i32): JobNode {
    if (this.graph.has(job) === false) this.addNode(job);
    return this.graph.get(job);
  }
}
