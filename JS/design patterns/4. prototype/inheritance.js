//**** Without classes */
function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
};

function Student(firstName, lastName, schoolName, grade) {}

function Student(firstName, lastName, schoolName, grade) {
  Person.call(this, firstName, lastName);
}

/*** Student Prototype needs to be point to Person.prototype */
// creates a "new" object out of thin air, and links that new object's internal [[Prototype]] to the object you specify (Foo.prototype in this case).
Student.prototype = Object.create(Person.prototype);

//Student.prototype = Person.prototype; // this is wrong, as it will modify the Person.prototype object as well.

// ES6+
// modifies existing `Bar.prototype`
//Object.setPrototypeOf( Student.prototype, Person.prototype );
Person.prototype.hi = function () {
  return "hi";
};

var test = new Student("suraj", "negi", "DAV", "A");

console.log(test.getFullName());

console.log(test.hi());

/** Using Class  */
class PersonClass {
  constructor(firstName) {
    this.firstName = firstName;
  }
  getName() {
    return this.firstName;
  }
}

class StudentClass extends PersonClass {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  // getName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
}

var test = new StudentClass("Suraj", "Negi");
console.log(test.getName());

// OBJECT Inheritance

let human = {
  eats: true,
  walk() {
    console.log(this.fly);
  },
};

let superHuman = {
  fly: true,
};

superHuman.__proto__ = human;

superHuman.walk();
// walk is taken from the prototype

//********************** */

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)

/***
 * 
 Summary
    - In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
    - We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
    - The object referenced by [[Prototype]] is called a “prototype”.
    - If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
    - Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
    - If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
    - The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.
 */
