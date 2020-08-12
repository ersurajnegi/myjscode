Array.prototype.map = function (func, context) {
    // if cb is not a funnction and this is not there, throw error
    if (!((typeof func === 'Function' || typeof func === 'function') && this))
        throw new TypeError();


    var length = this.length;
    var items = [];
    for (var i = 0; i < length; i++) {
        items.push(func.call(context, this[i], i, this))
    };
    return items;

}


var a = [1, 2, 3, 4]

a = a.map((item) => item * 10)
console.log(a);