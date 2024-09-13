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




class Singleton {
    constructor() {
        if (Singleton._instance) {
            return MyClass._instance
        }
        Singleton._instance = this;
    }
}

var instanceOne = new Singleton() // Executes succesfully
var instanceTwo = new Singleton() // Throws error

console.log(instanceOne === instanceOne)



class Singleton {

    constructor() {
        Singleton.instance = this;
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

console.log(Singleton.getInstance());
console.log(Singleton.getInstance());






//make api call using fetch with name parameter
//dynamic value is being passed from the parent component is chaning after 2 secs
const test = ({name,dynamicValue}) => {





    return (<p>{name},{dynamicValue}</p>)
}