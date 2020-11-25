
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
}




let g = new Graph();
g.addVertex('Amritsar');
g.addVertex("New Delhi");
g.addVertex("Bangalore");

console.log(g.adjacencyList);

console.log("Adding Edge :")

g.addEdge("Amritsar", "Bangalore");
g.addEdge("Amritsar", "New Delhi");
g.addEdge("Bangalore", "New Delhi");

console.log("After Adding Edges :")
console.log(g.adjacencyList);

// console.log("Removing Edge between Amritsar and Bangalore");
// setTimeout(() => {
//     g.removeEdge("Amritsar", "Bangalore");

//     console.log("After Removing Edge between Amritsar and Bangalore")
//     console.log(g.adjacencyList);
// }, 3000)

// console.log("Removing Vertex Bangalore :");
// g.removeVertex("Bangalore");
// console.log(g.adjacencyList);