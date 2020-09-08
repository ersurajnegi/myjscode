var NodeElement = function (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

/**
 * Initialize your data structure here.
 */
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
    return currentNode.value; if (index === 0) {
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
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new NodeElement(val);

    if (!this.head) {
        this.head = node;
        node.prev = null;
        node.next = null;
    }
    else {
        node.next = this.head;
        node.prev = this.head.prev;
        this.head.prev = node;
        this.head = node;
    }

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
    newNode.prev = currentNode;
    newNode.next = null;
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
    if (index === this.length) {
        this.addAtTail(val);
        return
    }
    if (index < this.length) {
        let node = new NodeElement(val);
        let count = 0;
        let currentNode = this.head;
        while (currentNode && index !== count) {
            currentNode = currentNode.next;
            count++;
        }
        node.next = currentNode;

        currentNode.prev.next = node;

        node.prev = currentNode.prev;

        currentNode.prev = node;
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
        if (this.head && this.head.prev)
            this.head.prev = null;
        this.length--;
        return;
    }
    let count = 0;
    let currentNode = this.head;
    while (currentNode && count !== index) {
        currentNode = currentNode.next;
        count++
    }
    if (currentNode.next)
        currentNode.next.prev = currentNode.prev;
    if (currentNode.prev)
        currentNode.prev.next = currentNode.next;
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