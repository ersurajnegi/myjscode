
/*
    SINGLY LINKED LIST :   linked list is a linear data structure 
        - DS that conatins a HEAD, TAIL and LENGTH property
        - consists of NODES and each NODE has some value and a poninter to next or NULL

    BIG O:
        - INSERTION -> O(1) 
        - Removal -> depends O(1) or O(n)
        - Searching -> O(n)
        - Access -> O(n)
*/


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }
    unshift(value) {
        if (!value) { return; }
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }

    set(value, index) {
        let node = this.get(index);
        if (!node) { return false; }
        node.value = value;
        return true;
    }
    insertAt(value, index) {
        if (index === undefined || index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value);
        } else if (index === 0) {
            this.unshift(value);
        }
        else {
            let newNode = new Node(value);
            let previousNode = this.get(index - 1);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
        }
        return true;
    }
    removeAt(index) {
        if (index === undefined || index < 0 || index >= this.length) {
            return false;
        }
        if (index === this.length - 1) {
            this.pop();
            return true;
        } else if (index === 0) {
            this.shift();
            return true;
        }
        else {
            let previousNode = this.get(index - 1);
            let currentNode = this.get(index);
            previousNode.next = currentNode.next;
            this.length--;
            return true;
        }
    }
    reverse() {
        var curr = this.head;
        var next = null;
        var prev = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        this.traverse();
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


let list = new LinkedList()

list.push(10);
list.push(100);
list.push(1000);
list.push(10000);
list.push(100001);

// //to ttest POP functionality
// function pop(){
//     // POP
//     console.log(`Removed element if ${JSON.stringify(list.pop())}`);
//     console.log(`Length is ${list.length}`);
//     console.log(`New Tails is ${JSON.stringify(list.tail)}`);
// }
// pop();

// // to test shift functionality
// function shift() {
//     console.log(`Removed element if ${JSON.stringify(list.shift())}`);
//     console.log(`Length is ${list.length}`);
//     console.log(`New head is ${JSON.stringify(list.head)}`);
// }
// shift();

//function to test Shift

// function unshift(val) {
//     list.unshift(val);
//     console.log(`Length is ${list.length}`);
//     console.log(`New head is ${JSON.stringify(list.head)}`);
//     console.log(`New Tails is ${JSON.stringify(list.tail)}`);
// }

// unshift(10);

// //function to test get at index
// function get(index) {
//     console.log(`Value at index ${index} is :  ${JSON.stringify(list.get(index))}`);
// }

// get(1);
// get(3);
// get(10);

//function to test get at index
// function set(value, index) {
//     if (list.set(value, index)) {
//         console.log('value has been added Successfully!!!');
//     }
//     else {
//         console.log('value has not been added Successfully!!!');
//     }
// }

// set(9000, 30);

// //function to test insertAt 
// function insertAt(value, index) {
//     if (list.insertAt(value, index)) {
//         console.log('value has been added Successfully!!!');
//     }
//     else {
//         console.log('value has not been added Successfully!!!');
//     }
// }

// //function to test removeAt 
// function removeAt(index) {
//     if (list.removeAt(index)) {
//         console.log('value has been removed Successfully!!!');
//     }
//     else {
//         console.log('value has not been removed Successfully!!!');
//     }
// }

list.reverse();