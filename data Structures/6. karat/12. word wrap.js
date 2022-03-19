//QUESTION 1:
//WORD WRAP

///some issue with this

function wordWrap(words, maxLen) {
    if (!words || words.length === 0) {
        return [];
    }
    const result = [];
    let i = 0;
    while (i < words.length) {
        let remain = maxLen;
        let count = 0;
        while (i < words.length) {
            if (remain - words[i].length < 0) {
                break;
            }
            count++;
            remain -= words[i++].length + 1;
        }
        result.push(words.slice(i - count, i).join('-'));
    }
    return result;
}