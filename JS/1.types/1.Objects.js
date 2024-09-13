/*
    -The Object class represents one of JavaScript's data types.
    -It is used to store various keyed collections and more complex entities

    -- Nearly all objects in JavaScript are instances of Object;
    -- a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden).
    -- However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)),
    -- or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

    - Ways to create an Object:
        -- var a = {};
        -- var a = new Object();

        -- Object.assign()
            --- copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

        -- Object.assign(target, ...sources)

    const obj = { a: 1 };
    const copy = Object.assign({}, obj);
    console.log(copy); // { a: 1 }
*/

/**
    MAP:

    Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type(even objects,boolean,number etc.).

    Methods and properties are:

        -> new Map() – creates the map.
        -> map.set(key, value) – stores the value by the key.
        -> map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
        -> map.has(key) – returns true if the key exists, false otherwise.
        -> map.delete(key) – removes the value by the key.
        -> map.clear() – removes everything from the map.
        -> map.size – returns the current element count.



    Iteration over Map
        For looping over a map, there are 3 methods:

        -> map.keys() – returns an iterable for keys,
        -> map.values() – returns an iterable for values,
        -> map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.


    The insertion order is used.The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.


    Object To Map conversion :  
        let obj = {
            name: "John",
            age: 30
        };

        let map = new Map(Object.entries(obj));

        alert( map.get('name') ); // John

    Map to Object Conversion:
        let map = new Map();
        map.set('banana', 1);
        map.set('orange', 2);
        map.set('meat', 4);

        let obj = Object.fromEntries(map.entries());


 */

/*
    Set
        A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

    Its main methods are:

        -> new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
        -> set.add(value) – adds a value, returns the set itself.
        -> set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
        -> set.has(value) – returns true if the value exists in the set, otherwise false.
        -> set.clear() – removes everything from the set.
        -> set.size – is the elements count.

*/