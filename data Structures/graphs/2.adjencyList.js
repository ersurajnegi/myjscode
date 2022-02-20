
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(edgeName) {
        if (this.adjacencyList[edgeName]) return;
        this.adjacencyList[edgeName] = []

    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((item) => item !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((item) => item !== v1);
    }

    removeVertex(v1) {
        while (this.adjacencyList[v1].length) {
            const v2 = this.adjacencyList[v1].pop();
            this.removeEdge(v1, v2);
        }
    }


    /*
        In DFS , we cover neighbous of neighbours first
        DFS(vertex):
            if vertex is empty
                return (this is base case)
            add vertex to results list
            mark vertex as visited
            for each neighbor in vertex's neighbors:
            if neighbor is not visited:
                recursively call DFS on neighbor

    */
    /***
        {
            A: [B, C],
            B: [A, D],
            C: [A, E],
            D: [B, E, F],
            E: [C, D, F],
            F: [D, E],

        }
    */
    dfsRecursive(vertex) {
        let visited = {};
        let result = [];
        const adjacencyList = this.adjacencyList;
        function traverse(v) {
            if (!v) return;
            visited[v] = true;
            result.push(v);
            adjacencyList[v].forEach(element => {
                if (!visited[element]) {
                    return traverse(element);
                }
            });
        }
        traverse(vertex);
        console.log(visited);
        return (result);
    }


    /***
        {
            A: [B, C],
            B: [A, D],
            C: [A, E],
            D: [B, E, F],
            E: [C, D, F],
            F: [D, E],

        }
    */
    dfsIterative(vertex) {
        let result = [];
        let visited = {};

        let stack = [vertex];

        while (stack.length) {
            let current = stack.pop();
            if (!visited[current]) {
                visited[current] = true;
                result.push(current);
                this.adjacencyList[current].forEach((item) => stack.push(item));
            }
        }
        console.log(visited);
        return result;
    }

    bfsIterative(vertex) {
        let result = [];
        let visited = {};

        let queue = [vertex];

        while (queue.length) {
            let current = queue.shift();
            if (!visited[current]) {
                visited[current] = true;
                result.push(current);
                this.adjacencyList[current].forEach((item) => queue.push(item));
            }
        }
        console.log(visited);
        return result;
    }

    //to check if there is path between two graph nodes.
    hasPath = (graph, src, dst) => {
        if (src === dst) return true;
        for (let node of graph[src]) {
            if (hasPath(graph, node, dst)) return true
        }

        return false
    };

    /**
     Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
     The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
    */
    undirectedPath = (edges, nodeA, nodeB) => {
        const buildGraph = (edges) => {
            let graph = {};
            for (let edge of edges) {
                const [a, b] = edge;
                if (!(a in graph)) graph[a] = [];
                if (!(b in graph)) graph[b] = [];
                graph[a].push(b);
                graph[b].push(a);
            }
            return graph;
        }

        const hasPath = (graph, src, dst, visited) => {
            if (src === dst) return true;
            if (visited[src]) return false;
            visited[src] = true;
            for (let node of graph[src]) {
                if (hasPath(graph, node, dst, visited)) return true
            }

            return false
        };

        let visited = {};
        const graph = buildGraph(edges);
        return hasPath(graph, nodeA, nodeB, visited)
    };
}




let g = new Graph();


//for DFs Recursiv Data
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


// console.log(g.adjacencyList);
// g.removeEdge("A", "B");
// g.removeVertex("D")
// console.log(g.adjacencyList);

// console.log(g.dfsRecursive("A"));
// console.log(g.dfsIterative("A"));
console.log(g.bfsIterative("A"));


// g.bfsTraverse("A");

// g.addVertex('Amritsar');
// g.addVertex("New Delhi");
// g.addVertex("Bangalore");

// console.log(g.adjacencyList);

// console.log("Adding Edge :")

// g.addEdge("Amritsar", "Bangalore");
// g.addEdge("Amritsar", "New Delhi");
// g.addEdge("Bangalore", "New Delhi");

// console.log("After Adding Edges :")
// console.log(g.adjacencyList);

// console.log("Removing Edge between Amritsar and Bangalore");
// setTimeout(() => {
//     g.removeEdge("Amritsar", "Bangalore");

//     console.log("After Removing Edge between Amritsar and Bangalore")
//     console.log(g.adjacencyList);
// }, 3000)

// console.log("Removing Vertex Bangalore :");
// g.removeVertex("Bangalore");
// console.log(g.adjacencyList);
// console.log(g.adjacencyList);