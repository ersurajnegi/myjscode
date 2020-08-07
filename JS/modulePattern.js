var testMod = (function testModule() {
    var test = [1, 2, 3, 4, 5];
    currentIndex = 0;
    getCurrent = function () {
        return test[currentIndex];
    }
    changeIndex = function () {
        currentIndex++;
    }
    return {
        getCurrent,
        changeIndex
    }
})();

module.exports = testMod;

// var test1 = module;


// console.log(test1.getCurrent())
// test1.changeIndex();
// test1.changeIndex();

// console.log(test1.getCurrent())



// var test2 = module;

// console.log("------for second Object------")
// console.log(test2.getCurrent());

// test2.changeIndex();
// console.log(test2.getCurrent());
