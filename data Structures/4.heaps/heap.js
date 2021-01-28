/*
    Heap : same as Trees with some different Rules
        - Usefuld data structure for Sorting. and implementing Priority Queues

    MaxBinaryHeap:
        - Each Parent has at most two child nodes

        - Each Parent nodes are always GREATER than Child nodes

        - it shud be as compact as possible. All the children of each node are as full as they can be and
          left children are filled out first


    MinBinaryHeap: Each Parent nodes are always SMALLER than Child nodes

        - Each Parent has at most two child nodes

        - Each Parent nodes are always SMALLER than Child nodes

        - it shud be as compact as possible. All the children of each node are as full as they can be and
          left children are filled out first


        BIG O:
        - INSERTION -> O(log N) 
        - Removal -> O(log N)
        - Searching -> O(N)
*/


class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    //push value at the end of the heap and then bubble it up to its correct position
    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let parentIdx = Math.floor((index - 1) / 2);
        while (this.values[parentIdx] <= this.values[index] && index > 0) {
            //swap the elements
            [this.values[parentIdx], this.values[index]] = [this.values[index], this.values[parentIdx]];
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2);
        }

    }

    getHeap() {
        console.log('final Heap : ', this.values)
    }

    extractMap() {
        //1. remove the root(which is highest node)
        //2. Replace the rootnwith added latest item(last item).
        //3. then adjust the root item to its proper position
        let length = this.values.length - 1;
        [this.values[0], this.values[length]] = [this.values[length], this.values[0]];
        this.values.pop();
        let idx = 0;

        length = this.values.length
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild, rightchild;
            let swap = null;

            //if leftChild is within bounds of array
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            //if rightChild is within bounds of array
            if (rightChildIdx < length) {
                rightchild = this.values[rightChildIdx];
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightchild > leftChild)) {
                    swap = rightChildIdx;
                }

            }

            if (swap === null) {
                break;
            }
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]]
            idx = swap;
        }
    }
}


let heap = new MaxBinaryHeap()
heap.values.push(99);
heap.values.push(70);
heap.values.push(65);
heap.values.push(44);
heap.values.push(45);
heap.values.push(40);
heap.values.push(53);

// heap.getHeap();

// heap.insert(100);

// heap.getHeap();

// heap.insert(15);

// heap.getHeap();

// heap.insert(58);
heap.getHeap();

// extract Max
heap.extractMap();

heap.getHeap();
