//**** Without classes */
function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";
};

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

function Student(firstName, lastName, schoolName, grade) {
    Person.call(this, firstName, lastName);
}

/*** Student Prototype needs to be point to Person.prototype */
Student.prototype = Object.create(Person.prototype);
Person.prototype.hi = function () {
    return 'hi';
}



var test = new Student('suraj', 'negi', 'DAV', 'A');


console.log(test.getFullName());

console.log(test.hi());


/** Using Class  */
class StudentClass {
    constructor(firstName) {
        this.firstName = firstName;
    }
    getName() {
        return this.firstName;
    }
}

class PersonClass extends StudentClass {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`
    }
}

var test = new PersonClass('Suraj', 'Negi');
console.log(test.getName())