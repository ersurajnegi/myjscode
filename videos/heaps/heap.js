class MaxBonaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element < parent) { break; }

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    bubbleDown() {
        let removedItem = this.values[0];
        this.values[0] = this.values[this.values.length];
        this.values.pop();
        let parentIdx = 0;

        let leftChildIdx = (2 * parentIdx) + 1;
        let rightChildIdx = leftChildIdx + 1;

        let leftChild = null;
        let rightChild = null;
        let temp = null;

        if (leftChildIdx < this.values.length - 1) {
            leftChild = this.values[leftChildIdx];
        }

        if (rightChildIdx < this.values.length - 1) {
            rightChild = this.values[rightChildIdx];
        }
        // if both the children ia greater than parent node
        if (this.values[parentIdx] < leftChild && this.values[parentIdx] < rightChild) {
            //replace with left, if it greater than right
            if (leftChild > rightChild) {
                temp = leftChild;
                parentIdx = leftChildIdx;
            }
            else {
                temp = leftChild;
                parentIdx = leftChildIdx;
            }
        }
        //IF left child is greater than parent
        else if (this.values[parentIdx] < leftChild) {
            temp = leftChild;
            parentIdx = leftChildIdx;
        }
        //IF right child is greater than parent
        else if (this.values[parentIdx] < rightChild) {
            temp = leftChild;
            parentIdx = leftChildIdx;
        }

    }
}

var heap = new MaxBonaryHeap();
