function hackerrankInString(s) {

    let strObj = {};

    for (let i = 0; i < s.length; i++) {
        strObj[s[i]] = (strObj[s[i]] || 0) + 1;
    }

    let returnType = 'YES';
    let str = 'hackerrank';
    // console.log(strObj);
    for (let i = 0; i < str.length; i++) {
        if (strObj[str[i]] == undefined || strObj[str[i]] < 1) {
            returnType = 'NO';
            break;
        }
        else {
            strObj[str[i]] = strObj[str[i]] - 1;
        }
    }
    // console.log(strObj)

    return returnType;

}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));
console.log(hackerrankInString('hhaacckkekraraannk'));
console.log(hackerrankInString('knarrekcah'));
console.log(hackerrankInString('knarrekcaeeee'));