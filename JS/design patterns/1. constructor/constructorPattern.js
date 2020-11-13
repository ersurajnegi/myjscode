///***** Basic constructor Patter for JavaScript */

// function Person({ name, age }) {
//     this.name = name;
//     this.age = age;

//     this.getDetails = function () {
//         return `${this.name} : ${this.age}`
//     }
// }

// let one = new Person({ name: 'suraj', age: 20 });

// let two = new Person({ name: 'Hema', age: 80 });


// console.log(one.getDetails());

// console.log(two.getDetails());

//***The above is a simple version of the constructor pattern but it does suffer from some problems. 
//One is that it makes inheritance difficult and 
//the other is that functions such as getDetails() are redefined for each of the new objects created using the Person constructor. 
//This isn't very optimal as the function should ideally be shared between all of the instances of the Person type.


// **** Constructors With Prototypes****

function Person({ name, age }) {
    this.name = name;
    this.age = age;
}

Person.prototype.getDetails = function () { return `${this.name} : ${this.age}` };

let one = new Person({ name: 'suraj', age: 20 });

let two = new Person({ name: 'Hema', age: 80 });


console.log(one.getDetails());

console.log(two.getDetails());


// Above, a single instance of getDetails() will now be shared between all of the Car objects.
