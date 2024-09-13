/*  
    Array is an ordered collection.
        - Arrays cannot use strings as element indexes but use integers.

    let fruits = ['Apple', 'Banana']

*/

// Methods in Array.prototype:

/*
    Array.from() lets you create Arrays from:
        - array-like objects (objects with a length property and indexed elements); or
        - iterable objects (objects such as Map and Set).
*/
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


/*
    The Array.isArray() method determines whether the passed value is an Array.
*/
console.log(Array.isArray([1, 2, 3]))   // true
console.log(Array.isArray({ foo: 123 })); // false
console.log(Array.isArray('foobar'))    // false
console.log(Array.isArray(undefined))   // false

/*  
    Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
*/
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array of 7 empty slots
Array(1, 2, 3);    // [1, 2, 3]

/*
    The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

