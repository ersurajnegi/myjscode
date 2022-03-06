


/// hoisting


//1.

function Test() {

    console.log(a);
    let a = 10;
}

// Test();

//2 --if he/she says let variable don't get hoisted

function Test() {
    var a = 10;
    {
        console.log(a);
        let a = 20;
    }
}

// Read only object
// is there a way we can make an object to make it readOnly

Object.freeze(Object) //no add/delete and modify a property


//3 : IMPLICCIT and EXPLICIT binding

// ask what is going to be the output
var student = {
    name: 'Suraj',
    displayName: function () {
        console.log(this.name);
    }
}

var student2 = {
    name: 'Negi',
}

student2.__proto__ = student
student2.displayName()

//OR as below
//student.displayName.call(student2);

//then ask if want to print : ADOBE, that is from global scope, then he has to change it to arrow function
var name = "ADOBE"




// 4 Memoize using Closure
function memo(fn) {
    let cache = {}

    return (...args) => {
        const key = args.join("");
        if (cache[key]) return cache[key]

        cache[key] = fn.call(this, ...args);
        return cache[key]
    }
}
const memoizedFn = memo((a, b) => { return a + b })

console.log(memoizedFn(10, 10));


///output
console.log("a");
setTimeout(() => console.log("b"));
Promise.resolve().then(() => console.log('c'))
console.log("d")


// implement this code
// write an Object, using that i should be able to call it like this

employee.getName().getEmployerName().getAddress();

const employee = {
    name: 'Suraj',
    employerName: 'Adobe',
    address: 'Bengaluru',
    getName: function () {
        console.log(this.name);
        return this;
    },
    getEmployerName: function () {
        console.log(this.employerName);
        return this;
    },
    getAddress: function () {
        console.log(this.address);
        return this;
    }
}




/*
    CSSS

   

    3. box model

    4. media queries

    5. css variables

    6. css specificity 

    7. psudeo elements and psudeo classes

    1. a[href^="https"] --select the anchor element whose href attribute starts with https

    2. a[href*="js"] -- select which anchor element will have href consisting of the substring “js”

*/


async function Test() {
    const [a, b, c] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/todos/2'),
        fetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]);
    let aJ = await a.json();
    let bJ = await b.json();
    let cJ = await c.json();
    console.log(aJ, bJ, cJ);
}