/*
    Debouncing And Throttling: These are two similar (but different!) techniques to control how many times we allow a function to be executed over time.

    Debouncing --> executes the function if there was no new event in given milliseconds

    Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. For example, “execute this function only if 100 milliseconds have passed without it being called.”

    In other words: The debounce technique allows us to “group” multiple raised sequential functions into a single function.



    Throttling --> in case of a "storm of events", this executes once every given millseconds

    Throttling enforces a maximum number of times a function can be called over time. For example, “execute this function at most once every 100 milliseconds.”

    In other words: By using throttle, we don’t allow to our function to execute more than once every X milliseconds.




*/


const regular = document.getElementById('regular');
let regularCount = 0;

const debounce = document.getElementById('debounce');
let debounceCount = 0;

const throttle = document.getElementById('throttle');
let throttleCount = 0;

console.log(regular);


let input = document.getElementById('input')

input.addEventListener('keydown', (event) => {
    regularCount += 1
    regular.innerHTML = `Regular Function called ${regularCount} times`
})



const debounceItFunc = function (callback, interval) {
    let timeOut;
    return function () {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            callback.call(this, ...arguments)
            clearTimeout(timeOut);
        }, interval)

    }
}

input.addEventListener('keydown', debounceItFunc((event) => {
    debounceCount += 1;
    debounce.innerHTML = `Debounce Function called ${debounceCount} times`;
}, 500))



const throttleFunc = function (callback, interval) {
    let isTimeStarted = false;
    return function () {
        if (isTimeStarted) { return; }

        isTimeStarted = true;

        setTimeout(() => {
            callback.call(this, ...arguments);
            isTimeStarted = false;
        }, interval)
    }
}

input.addEventListener('keydown', throttleFunc((event) => {
    throttleCount += 1;
    throttle.innerHTML = `Debounce Function called ${throttleCount} times`;
}, 500))



