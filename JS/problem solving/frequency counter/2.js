/* 
    Frequency Counter - validAnagram
        - <p>Given two strings, write a function to determine if the second string is an anagram of the first. 
        An anagram is a word, phrase, or name formed by rearranging the letters of another, such as <i>cinema</i>, formed from <i>iceman</i>.</p>

*/

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) { return false };

    if (str1 === str2) { return true };

    let lookup = {};

    for (const c of str1) {
        lookup[c] ? lookup[c] += 1 : lookup[c] = 1
    }
    for (const c of str2) {
        if (!lookup[c]) {
            return false;
        }
        else {
            lookup[c] = lookup[c] -= 1;
        }
    }
    return true;

}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
