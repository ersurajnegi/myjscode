/*
	STACK : is an Abstract Data Type (ADT)
		- allows operations at one end only
		- FOllows LIFO principle -> LAST in FIRST out.


	BIG O:
        - INSERTION -> O(1) 
        - Removal -> O(1)
        - Searching -> O(n)
        - Access -> O(n)
*/
// STACKS using LINKED LIST STARTS
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.size = 0;
		this.first = null;
		this.last = null;

	}

	push(value) {
		let newNode = new Node(value);
		if (!this.size) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}
	pop() {
		if (!this.size) return null;
		let temp = this.first;
		if (this.size == 1) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

// STACKS using LINKED LIST ENDS


// STACKS using Array Starts

class StackWithArray {
	constructor() {
		this.dataStore = [];
		this.top = 0;
	}

	push(element) {
		this.dataStore[this.top++] = element;
	}
	pop() {
		if (this.dataStore.length) {
			--this.top;
			return this.dataStore.pop();
		}

	}
	peek() {
		return this.dataStore[this.top - 1];
	}
	isEmpty() {
		return this.dataStore.length === this.top;
	}
	clear() {
		this.dataStore = [];
		this.top = 0;
	}
	length() {
		return this.top;
	}
}

// STACKS using Array ENds

