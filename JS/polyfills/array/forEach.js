

Array.prototype.forEach = function (func, thisArg) {
    if (!((typeof func === 'function' || typeof func === 'Function') && this)) {
        throw new TypeError();
    }
    var length = this.length;
    for (var i = 0; i < length; i++) {
        func.call(thisArg, this[i], i, this)
    }
}


var a = [1, 2, 3];

a.forEach((item) => console.log(item));
