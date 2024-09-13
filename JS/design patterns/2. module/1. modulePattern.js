/**
    Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

    In JavaScript, there are several options for implementing modules. These include:

        -The Module pattern
        -Object literal notation
        -AMD modules
        -CommonJS modules
        -ECMAScript Harmony modules
        
The Module pattern is based in part on object literals and so it makes sense to refresh our knowledge of them first.
*
*/

/*
    ***The Module Pattern***
    - A way to provide both private and public encapsulation
    - In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that
        -- we're able to include both public/private methods and
        -- variables inside a single object,
      thus, shielding particular parts from the global scope.

    - Privacy
        -- The Module pattern encapsulates "privacy", state and organization using closures.
        -- It provides a way of wrapping a mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding with another developer's interface.
*/

var Module = (function Employee() {
    //private Variable and methods

    var name = 'Suraj';
    var getNamePrivate = function () {
        console.log(name);
    }
    return {
        getNamePublic: function () {
            return getNamePrivate();
        }
    }
})();


Module.getNamePublic();

/**
 * Here, other parts of the code are unable to directly read the value of our getNamePrivate.
 * The name variable is actually fully shielded from our global scope so it acts just like a private variable would
 */

 /**
  * Advantages
  *     - it supports private data - so, in the Module pattern, public parts of our code are able to touch the private parts,
  */
/**
 * Disadvantages
 * The  of the Module pattern are that as we access both public and private members differently, when we wish to change visibility, we actually have to make changes to each place the member was used.
 */