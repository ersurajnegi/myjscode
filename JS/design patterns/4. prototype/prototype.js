/**
 * The Prototype Pattern
 *      - whenever a function is created, JS automatically creates a object for function which is called "Prototype"
 *      - and whenever a object is created using new Function(), Object is created from function's prototype Object and linked to that prototype only.
 */


function Foo() {

}

var obj1 = new Foo();
var obj2 = new Foo();

console.log(obj1.__proto__ === Foo.prototype);
console.log(obj2.__proto__ === Foo.prototype);
console.log(obj1.__proto__ === obj2.__proto__);

console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2));

console.log(obj1.constructor === Foo);

