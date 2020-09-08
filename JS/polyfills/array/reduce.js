Array.prototype.reduce = function (func, initialValue) {
    // if cb is not a funnction and this is not there, throw error
    if (!((typeof func === 'Function' || typeof func === 'function') && this))
        throw new TypeError();

    var accumulator = initialValue || undefined;

    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = func(accumulator, this[i], i, this)
        } else {
            accumulator = this[i]
        }
    }
    return accumulator;

}


var a = [1, 2, 3, 4]

a = a.reduce((a, b) => { return a + b }, 100);
console.log(a);