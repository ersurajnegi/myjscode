//We are working on a security system for a badged - access room in our company's building.

// Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

// 1. All employees who didn't use their badge while exiting the room - 
// they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

// 2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

// Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

// badge_records_1 = [
// ["Martha", "exit"],
// ["Paul", "enter"],
// ["Martha", "enter"],
// ["Martha", "exit"],
// ["Jennifer", "enter"],
// ["Paul", "enter"],
// ["Curtis", "exit"],
// ["Curtis", "enter"],
// ["Paul", "exit"],
// ["Martha", "enter"],
// ["Martha", "exit"],
// ["Jennifer", "exit"],
// ["Paul", "enter"],
// ["Paul", "enter"],
// ["Martha", "exit"],
// ]

// Expected output: ["Curtis", "Paul"], ["Martha", "Curtis"]

// Additional test cases:

// badge_records_2 = [
// ["Paul", "enter"],
// ["Paul", "enter"],
// ["Paul", "exit"],
// ]

// Expected output: ["Paul"], []

// badge_records_3 = [
// ["Paul", "enter"],
// ["Paul", "exit"],
// ["Paul", "exit"],
// ]

// Expected output: [], ["Paul"]

// badge_records_4 = [
// ["Paul", "enter"],
// ["Paul", "exit"],
// ["Paul", "exit"],
// ["Paul", "enter"],
// ["Martha", "enter"],
// ["Martha", "exit"],
// ]

// Expected output: ["Paul"], ["Paul"]

// badge_records_5 = [
// ["Paul", "enter"],
// ["Paul", "exit"],
// ]

// Expected output: [], []

// badge_records_6 = [
// ["Paul", "enter"],
// ["Paul", "enter"],
// ["Paul", "exit"],
// ["Paul", "exit"],
// ]

// Expected output: ["Paul"], ["Paul"]

// badge_records_7 = [
// ["Paul", "enter"],
// ["Paul", "exit"],
// ["Paul", "exit"],
// ["Paul", "enter"],
// ]

// Expected output: ["Paul"], ["Paul"]


// Given a list of people who enter and exit, find the people who entered without
// their badge and who exited without their badge.

// 作者：关辰晓
// 链接：https://www.jianshu.com/p/fdbcba5fe5bc
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
//QUESTION 1:

function invalidBadgeRecords(records) {
    if (!records || records.length === 0) {
        return [];
    }
    const result = [[], []];
    // 0 for exited, 1 for entered
    const state = new Map();
    const invalidEnter = new Set();
    const invalidExit = new Set();
    for (const [name, action] of records) {
        !state.has(name) && state.set(name, 0);
        if (action === 'enter') {
            if (state.get(name) === 0) {
                state.set(name, 1);
            } else {
                invalidEnter.add(name);
            }
        } else {
            if (state.get(name) === 1) {
                state.set(name, 0);
            } else {
                invalidExit.add(name);
            }
        }
    }
    for (const [name, s] of state) {
        if (s === 1) {
            invalidEnter.add(name);
        }
    }
    for (const name of invalidEnter) {
        result[0].push(name);
    }
    for (const name of invalidExit) {
        result[1].push(name);
    }
    return result;
}


//QUESTION 2:
/**
 给 list of [name, time], time is string format: '1300' //下午一点
return: list of names and the times where their swipe badges within one hour. if there are multiple intervals that satisfy the condition, return any one of them.
name1: time1, time2, time3...
name2: time1, time2, time3, time4, time5...
example:
input: [['James', '1300'], ['Martha', '1600'], ['Martha', '1620'], ['Martha', '1530']] 
output: {
'Martha': ['1600', '1620', '1530']
}
 */


function frequentAccess(records) {
    if (!records || records.length === 0) {
        return [];
    }
    const result = [];
    const times = new Map();
    for (const [name, timestamp] of records) {
        if (times.has(name)) {
            times.get(name).push(timestamp);
        } else {
            times.set(name, [timestamp]);
        }
    }
    for (const [name, timestamps] of times) {
        timestamps.sort(timeDifference);
        let i = 0;
        let timewindow = [timestamps[i]];
        for (let j = 1; j < timestamps.length; j++) {
            if (timeDifference(timestamps[i], timestamps[j]) < 60) {
                timewindow.push(timestamps[j]);
            } else {
                timewindow = [timestamps[j]];
                i = j;
            }
        }
        if (timewindow.length >= 3) {
            result.push([name, timewindow]);
        }
    }
    return result;
}

function timeDifference(a, b) {
    const aHour = Math.floor(a / 100);
    const bHour = Math.floor(b / 100);
    const aMinute = a % 100;
    const bMinute = b % 100;
    return aHour * 60 + aMinute - (bHour * 60 + bMinute);
}