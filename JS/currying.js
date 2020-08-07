var Sum = (a, b) => a + b;

var curry = function (f) {
    return function (...args) {
        if (args.length >= f.length) {
            return f.call(this, ...args);
        }
        else {
            return function (y) {
                return f.call(this, ...args.concat(y));
            }
        }
    }
}

var curried = curry(Sum);

console.log(curried(1)(10));
console.log(curried(1, 10));

