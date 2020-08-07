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
Student.prototype = Person.prototype;

var test = new Student('suraj', 'negi', 'DAV', 'A');


console.log(test.getFullName());

// class Student {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }
//     getName() {
//         return this.firstName;
//     }
// }

// class Person extends Student {
//     constructor(firstName, lastName) {
//         super(firstName);
//         this.lastName = lastName;
//     }
// }

// var test = new Person('hi', 'bi');
// console.log(test.getName())