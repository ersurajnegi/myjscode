
class List {

    constructor() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
    }

    append(element) {
        if (element) {
            this.dataStore[this.listSize++] = element;
        }
    }

    find(element) {
        return this.dataStore.indexOf(element);
    }

    remove(element) {
        let index = this.find(element);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            --this.listSize;
            return "Item Deleted";
        }
        return "Item not found";
    }
    length() {
        return this.listSize;
    }

    insertAt(element, pos) {
        if (element && pos) {
                this.dataStore.splice(pos , 0 ,element);
                ++this.listSize;
                return `Element ${element} has been inserted at position ${pos} successfully`;
        }
        return false;
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
}

const list = new List();
list.append(1);
list.append(2);
list.append(3);
list.append(5);
list.append(6);
console.log(`Length after push ${list.length()}`);


console.log("*****Next Operation********* ");
console.log(`Element 1 is found at index ${list.find(1)}`);

// console.log("*****Next Operation********* ");
// console.log(list.remove(2));

// console.log("*****Next Operation********* ");
// console.log(list.remove(1));
// console.log(`Length after remove ${list.length()}`);

console.log(list.insertAt(4,3));

console.log("Final list is : " , list.dataStore);


list.clear();
console.log("Final list is : " , list.dataStore);