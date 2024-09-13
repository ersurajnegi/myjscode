/// hoisting

//1.

function Test() {
  console.log(a);
  var a = 10;
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

// Read only object̃
// is there a way we can make an object to make it readOnly

var config = {
  token: "Adobe",
};

Object.freeze(a); //no add/delete and modify a property

const readOnlyConfig = new Proxy(config, {
  set(target, property, value) {
    throw new Error("Cannot set property " + property + " of read-only object");
  },
});

// Trying to modify the read-only proxy will throw an error
readOnlyConfig.token = "New Value"; // Error: Cannot set property 'token' of read-only object

//EVent Bubbling, Event Capturing, Event Delegation

//3 : IMPLICIT and EXPLICIT binding

// ask what is going to be the output
var name = "ADOBE";
var student = {
  name: "Suraj",
  displayName: function () {
    console.log(this.name);
  },
};

var student2 = {
  name: "Negi",
};

student2.displayName();

//any one way is fine.
student.displayName.call(student2);
student2.__proto__ = student;
Object.setPrototypeOf(student2, student);

//then ask if want to print : ADOBE, that is from global scope, then he has to change it to arrow function

// 4 Memoize using Closure
function memo(fn) {
  let cache = {};

  return (...args) => {
    const key = args.join("");
    if (cache[key]) return cache[key];

    cache[key] = fn.call(this, ...args);
    return cache[key];
  };
}
const memoizedFn = memo((a, b) => {
  return a + b;
});

console.log(memoizedFn(10, 10));

///output
console.log("a");
setTimeout(() => console.log("b"));
Promise.resolve().then(() => console.log("c"));
console.log("d");

//a,d,c,b
// implement this code
// write an Object, using that i should be able to call it like this

const a = 10;

a = 20;

const employee = {
  name: "Suraj",
  employerName: "Adobe",
  address: "Bengaluru",
  getName: function () {},
  getEmployerName: function () {},
  getAddress: function () {},
};

employee.getName().getEmployerName().getAddress();

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
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/todos/2"),
    fetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);

  const [aj, bj, cj] = await Promise.all([a.json(), b.json(), c.json()]);
  console.log(aj, bj, cj);
}

async function TestWithSettled() {
  const responses = await Promise.allSettled([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/todos/2"),
    fetch("https://jsonplaceholder.typicode.com/todos/3"),
  ]);

  const jsonPromises = responses.map(async (response) => {
    if (response.status === "fulfilled") {
      return await response.value.json();
    } else {
      return null; // or handle rejection/error accordingly
    }
  });

  const [aj, bj, cj] = await Promise.allSettled(jsonPromises);
  console.log(aj.value, bj.value, cj.value); // Note: Check for status if needed
}
