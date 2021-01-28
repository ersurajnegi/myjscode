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

