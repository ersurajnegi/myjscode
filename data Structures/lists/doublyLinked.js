class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        let removedode;
        if (!this.head) {
            return null;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            removedode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            removedode.prev = null;
        }

        this.length--;
        return removedode;
    }
    shift() {
        if (this.length === 0) { return undefined; }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unShift(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) { return null; }
        let halfOfLength = this.length / 2;
        if (index < halfOfLength) {
            // start from head
            let current = this.head;
            let counter = 0;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
        else {
            // start from tail 
            let current = this.tail;
            let counter = this.length - 1;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }
    set(index, value) {
        let foundNode = this.get(index);
        if (!foundNode) {
            return false;
        }
        foundNode.value = value;
        return true;

    }
    insertAt(index, value) {
        if (index < 0 || index > this.length) { return false; }
        if (index === 0) {
            this.unShift(value);
        } else if (index == this.length) {
            this.push(value);
        }
        else {
            let newNode = new Node(value);
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;

            prevNode.next = newNode;
            newNode.next = nextNode;

            nextNode.prev = newNode;
            newNode.prev = prevNode;
            this.length++;
        }
        return this;
    }

    removeFrom(index) {
        if (index < 0 || index > this.length) { return false; }
        if (index === 0) {
            this.shift();
        } else if (index == this.length) {
            this.pop();
        }
        else {
            let currentNode = this.get(index);
            let beforeNode = currentNode.prev;
            let afterNode = currentNode.next;

            beforeNode.next = afterNode;
            afterNode.prev = beforeNode;
            this.length--;
        }
        return this;
    }

    reverse() {
        if (this.length === 0) { return null; }
        let currentNode = this.head;
        while (currentNode) {
            let nextNode = currentNode.next;
            if (currentNode.prev === null) {
                currentNode.prev = nextNode;
                currentNode.next = null;
                this.tail = currentNode;                
            }
            else if (currentNode.next === null) {
                currentNode.next = currentNode.prev;
                currentNode.prev = null;
                this.head = currentNode;
            }
            else {
                currentNode.next = currentNode.prev;
                currentNode.prev = nextNode;
            }
            currentNode = nextNode;
        }
        return this;
    }
    traverse(isFromHead) {
        let returnString = "Start : ";
        if (isFromHead) {
            let current = this.head;
            while (current) {
                returnString = `${returnString} => ${current.value} `;
                current = current.next;
            }
        }
        else {
            let current = this.tail;
            while (current) {
                returnString = `${returnString} => ${current.value} `;
                current = current.prev;
            }
        }
        return returnString;
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

let list = new DoublyLinkedList()

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);

