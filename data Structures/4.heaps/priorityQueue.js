/*
    Min Binary Heap : Lower number means higher priority
        - Each node has value and prority. Use priority to build the HEAP
        - Enqueue method accepts a value and priority, makes a new node and put it on right spot based on priority
        - Dequeue remove root element, returns it and rearranges the heap using priority
*/

class PrioQueue {
    constructor() {
        this.values = []
    }

    getHeap() {
        return this.values;
    }

    push(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (this.values[parentIdx].priority > this.values[index].priority) {
                [this.values[parentIdx], this.values[index]] = [this.values[index], this.values[parentIdx]];
                index = parentIdx;
                parentIdx = Math.floor((index - 1) / 2);
            }
            else {
                break;
            }
        }
    }

    dequeue() {
        //1. remove the root(which is highest node)
        //2. Replace the rootnwith added latest item(last item).
        //3. then adjust the root item to its proper position
        let length = this.values.length - 1;
        [this.values[0], this.values[length]] = [this.values[length], this.values[0]];
        this.values.pop();
        let idx = 0;

        length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild, rightchild;
            let swap = null;

            //if leftChild is within bounds of array
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            //if rightChild is within bounds of array
            if (rightChildIdx < length) {
                rightchild = this.values[rightChildIdx];
                if ((swap === null && rightchild.priority > element.priority) ||
                    (swap !== null && rightchild.priority > leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]]
            idx = swap;
        }
    }

}


class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}


let heap = new PrioQueue();

console.log('Starting again ---------------')


console.log('inserting cold fever with prio 3');
heap.push("COLD FEVER ", 4);

console.log('inserting gun shot with prio 2');
heap.enqueue("GUN SHOT", 2);

console.log('inserting flu with prio 4');
heap.enqueue("FLU SHOT", 4);

console.log('inserting heart Attacj with prio 1');
heap.enqueue("HEART ATTACK", 1);
console.log(heap.getHeap());


heap.dequeue();
console.log(heap.getHeap());


heap.dequeue();
console.log(heap.getHeap());


heap.dequeue();
console.log(heap.getHeap());