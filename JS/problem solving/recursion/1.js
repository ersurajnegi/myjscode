/*
    Recursion : function calling itself.

        -  eg: JSONstringify/JSON.parse, DOM traversal,

        Important points:
            - function call itselfs with different INPUT.
            - BASE CASE -> the condition where recursion ends
*/


/* 
    function which accepts a string and return a new string in reverse

*/
function reverse(str) {
    if (str.length == 1) { return str }

    return str.substr(-1, 1) + reverse(str.substr(0, str.length - 1))
}


console.log(reverse('hello'));