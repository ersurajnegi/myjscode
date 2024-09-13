/*
Write a Notifier class that supports the following operations:

1. Constructor.

var notifier = new Notifier();

2. Listening to events.

var listenerJohn = notifier.on('MY_EVENT', function (action, item) {
  console.log(`John is ${action} ${item}`);
});

3. Triggering of events.

notifier.trigger('MY_EVENT', 'eating', 'a burger);

Should see the following in the console:
John is eating a burger


4. Unsubscribing a listener from existing events.
Note that `off` is not a method on `Notifier`.

`listenerJohn` is the reference returned by `on` above.

listenerJohn.off();
notifier.trigger('MY_EVENT', 'eating', 'a burger');


*/

// function Notifier() {
//     var events = {};
//     var id = 0;
//     var on = function (eventName, callback) {
//         if (!events[eventName]) {
//             events[eventName] = [];
//         }
//         events[eventName].push({ callback, id });
//         id++;
//         return {
//             notifyId: id - 1,
//             off: function () {
//                 events[eventName] = events[eventName].filter((item) => item.id !== this.notifyId);
//             }
//         }
//     };
//     var trigger = function (eventName, action, item) {
//         if (events[eventName]) {
//             events[eventName].forEach((obj) => {
//                 obj.callback.call(this, action, item);
//             })
//         }
//     }
//     return {
//         on,
//         trigger
//     }
// }

class Notifier {
    constructor() {
        this.events = {};
        this.id = 0;
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push({ id: this.id, callback });
        this.id++;
        let self = this;
        return {
            notifyId: this.id - 1,
            off: function () {
                self.events[this.event] = self.events[this.event].filter((item) => item.id !== this.notifyId);
            },
            event: eventName
        }

    }
    trigger(eventName, action, item) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((obj) => {
                obj.callback.call(this, action, item);
            })
        }

    }
}

var notifier = new Notifier();

var listenerJohn = notifier.on('MY_EVENT', function (action, item) {
    console.log(`John is ${action} ${item}`);
});
var listenerJane = notifier.on('MY_EVENT', function (action, item) {
    console.log(`Jane is ${action} ${item}`);
});

notifier.trigger('MY_EVENT', 'eating', 'a burger');

console.log('Jane is calling Off -------');
// console.log(listenerJane)
listenerJane.off();

notifier.trigger('MY_EVENT', 'eating', 'a burger');
