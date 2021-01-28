
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(edgeName) {
        if (this.adjacencyList[edgeName]) return;
        this.adjacencyList[edgeName] = [];
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
        this.adjacencyList[v1].forEach(v2 => {
            this.removeEdge(v1, v2);
        });
        delete this.adjacencyList[v1];
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
    dfsRecursive(vertex) {
        let result = [];
        let visitedMap = {}

        const traverse = (v) => {
            if (!v) { return; }

            visitedMap[v] = true;
            result.push(v);
            this.adjacencyList[v].forEach((item) => {
                if (!visitedMap[item]) {
                    traverse(item);
                }
            })
        }

        traverse(vertex);
        console.log('visited nodes : ', visitedMap)
        console.log('visited results : ', result);
    }

    /*
    Visit neighbors at current depth first!
    */
    bfsTraverse(vertex) {
        let queue = [];
        let result = [];
        let visitedMap = {};

        visitedMap[vertex] = true;
        queue.push(vertex);

        while (queue.length) {
            let node = queue.shift();
            result.push(node);

            this.adjacencyList[node].forEach((item) => {
                if (!visitedMap[item]) {
                    visitedMap[item] = true;
                    queue.push(item);
                }
            })
        }
        console.log('visited nodes : ', visitedMap)
        console.log('visited results : ', result);
        return result;
    }
}




let g = new Graph();
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
console.log(g.adjacencyList);

// g.dfsRecursive("A");


g.bfsTraverse("A");