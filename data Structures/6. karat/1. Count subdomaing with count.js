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
        //returnMap.set(str, (returnMap.get(str) || 0)  + count);
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


// QUESTION 2:
/**
  1. Create a 2d arraY with row = history1.length + 1 and column = history.length;
  2. Loop throught 2d arraY:(start from row =  1 ,column =1 )
    - check history1[i-1] === history2[j - 1]
      --2d[i][j] = 1 + 2d[i-1][j-1]

      -- else continue
 */
function longestCommonContinuousHistory(history1, history2) {
    if (
        !history1 ||
        !history2 ||
        history1.length === 0 ||
        history2.length === 0
    ) {
        return [];
    }
    let count = -1;
    let result = [];
    const memo = Array.from({ length: history1.length + 1 }, () =>
        Array.from({ length: history2.length }, () => 0)
    );
    //wayf creating 2d array
    /*
        let a = Array.from({length:4}, ()=>0)
        let b = Array.from({length:4}, ()=>a);

        console.log(a, b)

    */
    // var a = []
    // for (let i = 0; i < 4; i++) {
    //     a.push(0)
    // }
    // var b = []
    // for (let i = 0; i < 4; i++) {
    //     b.push(a)
    // }
    //  let Darray = new Array(history1.length + 1)
    // .fill(0)
    // .map((item) => new Array(history2.length).fill(0));
    for (let i = 1; i <= history1.length; i++) {
        for (let j = 1; j <= history2.length; j++) {
            if (history1[i - 1] === history2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
                if (memo[i][j] > count) {
                    count = memo[i][j];
                    result = history1.slice(i - count, i);
                }
            }
        }
    }
    return { result, count };

    /**
     * //2nd option withour an array. Using Map object
     const memo = new Map();
    for (let i = 1; i <= history1.length; i++) {
        for (let j = 1; j <= history2.length; j++) {
        if (history1[i - 1] === history2[j - 1]) {
            let key = `${i},${j}`;
            memo.set(key, 1 + (memo.get(`${i - 1},${j - 1}`) || 0));
            if (memo.get(key) > count) {
            count = memo.get(key);
            result = history1.slice(i - count, i);
            }
        }
        }
    }
     */
}

console.log(
    longestCommonContinuousHistory(
        ['3234.html', 'xys.html', '7hsaa.html'], // user1
        ['3234.html', 'sdhsfjdsh.html', 'xys.html', '7hsaa.html']
    )
);
