/**
 * Initialize your data structure here.
 */

var NodeElement = function (value) {
    this.value = value;
    this.next = null;
}

var MyLinkedList = function () {

    this.head = null;
    this.tail = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index == 0) { return this.head.value }
    if (index >= this.length) { return -1 }
    let count = 0;
    let currentNode = this.head;
    while (currentNode && count !== index) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode.value;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new NodeElement(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let currentNode = this.head;
    let newNode = new NodeElement(val);
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index <= this.length) {
        let node = new NodeElement(val);
        let count = 0;
        let currentNode = this.head;
        let prev = null;
        while (currentNode && index !== count) {
            prev = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        prev.next = node;
        node.next = currentNode;
        this.length++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index + 1 > this.length) { return }
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return;
    }
    let count = 0;
    let currentNode = this.head;
    let prev = null;
    while (currentNode && count !== index) {
        prev = currentNode;
        currentNode = currentNode.next;
        count++
    }
    prev.next = currentNode.next;
    this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
// console.log(obj.addAtHead(1));
// console.log(obj.addAtTail(3));
// console.log(obj.addAtIndex(1, 2));
// console.log(obj.get(1));
// console.log(obj.deleteAtIndex(1));
// console.log(obj.get(1));


//["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
//[[],              [7],        [2],        [1],         [3,0],         [2],          [6],         [4],     [4],     [4],       [5,0],       [6]]


// obj.addAtHead(7)
// obj.addAtHead(2)
// obj.addAtHead(1)
// obj.addAtIndex(3, 0);
// obj.deleteAtIndex(2);
// obj.addAtHead(6);
// obj.addAtTail(4);
// obj.get(4);
// obj.addAtHead(4);
// obj.addAtIndex(5, 0);
// obj.addAtHead(6);


obj.addAtIndex(0, 10);
obj.addAtIndex(0, 20);
obj.addAtIndex(1, 30);
console.log(obj.get(0));