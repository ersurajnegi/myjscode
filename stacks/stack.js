class Stack {

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
	clear(){
		this.dataStore = [];
		this.top = 0;
	}
	length(){
		return this.top;
	}
}


var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());