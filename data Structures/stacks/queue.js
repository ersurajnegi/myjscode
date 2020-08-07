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
