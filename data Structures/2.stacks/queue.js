/*
	QUEUE : Queue is an abstract data structure, somewhat similar to Stacks. 
		- Unlike stacks, a queue is open at both its ends. 
		- One end is always used to insert data (enqueue) and the other is used to remove data (dequeue).
		- Follows First-In-First-Out methodology,

	BIG O:
        - INSERTION -> O(1) 
        - Removal -> O(1)
        - Searching -> O(n)
        - Access -> O(n)
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.size = 0;
		this.first = null;
		this.last = null;
	}

	enqueue(value) {
		let node = new Node(value);
		if (this.size == 0) {
			this.first = node;
			this.last = node;
		}
		else {
			this.last.next = node;
			this.last = node;
		}
		return this.size++;
	}
	dequeue() {
		if (!this.size) { return null; }
		let temp = this.first;
		if (this.size === 1) {
			this.last = null;
			this.first = null;
		}
		else {
			this.first = this.first.next;
			--this.size;
			return temp.value;
		}
	}
}
