/**
 * The Singleton Pattern
 *      - It restricts instantiation of a class to a single object.
 *      - It can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist.
 *      - In the event of an instance already existing, it simply returns a reference to that object.
 */


var mySingleton = (function () {
    var instance;
    var init = function () {
        var randomNumber = Math.random();
        console.log('init called');

        var _getRandomNumber = function () {
            return randomNumber;
        }

        var publicGetRandomNumber = function () {
            return _getRandomNumber();
        }
        return {
            getRandomNumber: publicGetRandomNumber
        }
    }


    return {
        getInstance: function () {
            if (instance) { return instance }
            instance = new init();
            return instance;
        }
    }
})();

var a = mySingleton.getInstance();

var b = mySingleton.getInstance();

console.log(a.getRandomNumber() === b.getRandomNumber());


//Init function is called only and a.getRandomNumber = b.getRandomNumber which means only one Instance is created