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


const sum = (...args) => {
  const reducer = (acc, arg) => acc + arg;
  let total = args.reduce(reducer, 0);
  const add = (...args2) => {
    if (args2.length) {
      total = args2.reduce(reducer, total);
      return add;
    }
    return total;
  };
  return add;
};

console.log(sum());
console.log(sum()());
console.log(sum(1));
console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1, 2)());
console.log(sum(1)(2)(3)());
console.log(sum(1)(2, 3)());
console.log(sum(1)(2, 3));
console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2, 3, 4)());
console.log(sum(1, 2, 3, 4)());
console.log(sum(1, 2, 3, 4)); 