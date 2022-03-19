/**
 
    Longest Common Continuous Subarray

    Input: [
            ["3234.html", "xys.html", "7hsaa.html"], // user1
            ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"] // user2
        ]


    Outpur: ["xys.html", "7hsaa.html"]
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
}

console.log(
    longestCommonContinuousHistory(
        ['3234.html', 'xys.html', '7hsaa.html'], // user1
        ['3234.html', 'sdhsfjdsh.html', 'xys.html', '7hsaa.html']
    )
);
