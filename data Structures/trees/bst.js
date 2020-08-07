

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (currentNode) {
            // console.log(currentNode.value);
            if (value === currentNode.value) { return undefined; }
            if (value > currentNode.value) {
                //go right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                }
                currentNode = currentNode.right;
            }
            else if (value < currentNode.value) {
                //go left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                }
                currentNode = currentNode.left;
            }
        }
        return this;

    }
    find(value) {
        if (!this.root) { return undefined; }
        if (this.root.value === value) {
            return "Found at root";
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) { return `Found ${currentNode.value}` }
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        return "Not FOund!!!"
    }

    bfsTraverse() {
        let queue = [];
        let visited = [];
        queue.push(this.root);
        //thisi
        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            visited.push(currentNode.value)
        }
        return visited;
    }
    dfsPreorder() {
        let visited = [];
        let currentNode = this.root;
        function traverse(node) {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(currentNode);
        return visited;
    }
    dfsPostorder() {
        let visited = [];
        let currentNode = this.root;
        function traverse(node) {

            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            visited.push(node.value);
        }
        traverse(currentNode);
        return visited;
    }

    dfsInorder() {
        let visited = [];
        let currentNode = this.root;
        function traverse(node) {

            if (node.left) {
                traverse(node.left);

            }
            visited.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(currentNode);
        return visited;
    }
    remove(value) {
        this.removeNode(this.root, value);
    }
    removeNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        if (value === node.value) {
            // node is a leaf notde
            if (!node.left && !node.right) {
                return null;
            }
            // node doesn't ahve ny left node
            if (!node.left) {
                return node.right;
            }
            // node doesn't ahve ny right node
            if (!node.right) {
                return node.left;
            }
            // Both children, so need to find successor
            let currNode = node.right;
            while (currNode.left !== null) {
                currNode = currNode.left;
            }
            node.value = currNode.value;
            node.right = this.removeNode(node.right, currNode.value);
            return node;
        }

    }

    nodeCount() {
        let currentNode = this.root;
        let count = 0;
        function traverse(node) {
            count++;
            if (node.left) {
                traverse(node.left);

            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(currentNode);
        return count;
    }
    findEdge() {
        let currentNode = this.root;
        let edges = 0;
        function traverse(node) {
            if (node.left) {
                edges++;
                traverse(node.left);

            }
            if (node.right) {
                edges++;
                traverse(node.right);
            }
        }
        traverse(currentNode);
        return edges;
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}


var bst = new BinarySearchTree();


/**
 *					------------------10---------------------
					|					|
*					---6		      			---15

 				3		8				    			20
												  
 *
 */


bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);

bst.insert(20);

