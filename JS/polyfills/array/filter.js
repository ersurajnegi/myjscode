/** If a context parameter is provided to filter, it will be used as the callback's this value. 
 *  Otherwise, the value undefined will be used as its this value. */

Array.prototype.filter = function (func, context) {
    // if cb is not a funnction and this is not there, throw error
    if (!((typeof func === 'Function' || typeof func === 'function') && this))
        throw new TypeError();


    var length = this.length;
    var items = new Array(length);
    for (var i = 0; i < length; i++) {
        var item = this[i];
        if (func.call(context, item, i, this)) {
            items[i] = item;
        }
    };
    return items;

}



var a = [1, 2, 3];

var a = a.filter((item) => {
    return item > 0
});



console.log(a);
