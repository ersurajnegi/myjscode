var counts = [
    '900, google.com',
    '10, mail.yahoo.com',
    '40, sports.mail.yahoo.com',
];

function test(input) {
    let result = []
    let returnMap = new Map();
    for (let item of input) {
        let [count, str] = item.split(', ');
        count = Number(count);
        returnMap.set(str, returnMap.get(str) ? returnMap.get(str) + count : count);
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '.') {
                let subStr = str.substring(i + 1, str.length);
                returnMap.set(subStr, returnMap.get(subStr) ? returnMap.get(subStr) + count : count);
            }
        }
    }
    for (const [subdomain, count] of returnMap) {
        result.push(`${count} ${subdomain}`);
    }
    return result;
}

console.log(test(counts));

/**
com: 950
yahoo.com : 50
google.com: 900
mail.yahoo.com : 50
*/