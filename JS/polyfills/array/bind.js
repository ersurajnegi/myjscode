

// polyfill for bind

Function.prototype.myBind = function (context) {
    let fn = this;

    //with call
    return function (...arg) {
        fn.call(context, ...arg);
    }

    //with apply
    // return function (...arg) {
    //     fn.call(context, [...arg]);
    // }

}


let basic = {
    'name': 'Suraj',
    'age': 24
};

function callMe() {
    console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
}
let callBinded = callMe.bind(basic);
let mycallBinded = callMe.myBind(basic);
callBinded('Punjab', 'ASR');
mycallBinded('Punjab', 'ASR');