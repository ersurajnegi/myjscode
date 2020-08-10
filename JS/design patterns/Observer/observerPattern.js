/**
 *  The Observer Pattern
 *      - Is a Design Pattern where an object maintains a list of objects(observers) depending on it.
 * 
 *      - When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers
 * 
 *      - When we no longer wish for a particular observer to be notified of changes by the subject they are registered with, the subject can remove them from    the list of observers.
 * 
 * 
 * We can now expand on what we've learned to implement the Observer pattern with the following components:

        -- Subject: maintains a list of observers, facilitates adding or removing observers
        -- Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
        -- ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
        -- ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's
 */

/**
 * Creating Subject with ability to subscribe, unsubscribe or notify observers on the observer list
 */
var Subject = function () {
    var observers = [];
    var subscribe = function (obj) {
        let id = Math.floor(Math.random() * 10000);
        observers.push({ callback: obj, id });
        return {
            unsubscribe: function () {
                observers = observers.filter((item) => item.id !== id);
            }
        }
    }
    var next = function (context) {
        observers.forEach((item) => item.callback(context))
    }
    return {
        subscribe,
        next
    }
}
let test = new Subject();

let testU1 = test.subscribe((item) => { console.log('from testU1') });
let testU2 = test.subscribe((item) => { console.log('from testU2') });

test.next('hi');

// testU1.unsubscribe();
// testU2.unsubscribe();
console.log('after unsubscribe');
test.next('hi');