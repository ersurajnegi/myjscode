/**
 * In THIS VARIATION:
 *  - We would simply define all of our functions and variables in the private scope.
 *  - Return an anonymous object with pointers to the private functionality we wished to reveal as public.
 */

var Module = (function Employee() {
    //private Variable and methods

    var name = 'Suraj';
    var getNamePrivate = function () {
        console.log(name);
    }
    var getNamePublic = function () {
        return getNamePrivate();
    }
    return {
        getNamePublic: getNamePublic
    }
})();


Module.getNamePublic();