/*

QUESTION 1 : Suppose we have an unsorted log file of accesses to web resources. Each log entry consists of an access time, the ID of the user making the access, 
and the resource ID.

The access time is represented as seconds since 00:00:00, and all times are assumed to be in the same day.

*/

let logs1 = [
    ['58523', 'user_1', 'resource_1'],
    ['62314', 'user_2', 'resource_2'],
    ['54001', 'user_1', 'resource_3'],
    ['200', 'user_6', 'resource_5'],
    ['215', 'user_6', 'resource_4'],
    ['54060', 'user_2', 'resource_3'],
    ['53760', 'user_3', 'resource_3'],
    ['58522', 'user_22', 'resource_1'],
    ['53651', 'user_5', 'resource_3'],
    ['2', 'user_6', 'resource_1'],
    ['100', 'user_6', 'resource_6'],
    ['400', 'user_7', 'resource_2'],
    ['100', 'user_8', 'resource_6'],
    ['54359', 'user_1', 'resource_3'],
];

//output :
/**
   {'user_1': [54001, 58523],
  'user_2': [54060, 62314],
  'user_3': [53760, 53760],
  'user_5': [53651, 53651],
  'user_6': [2, 215],
  'user_7': [400, 400],
  'user_8': [100, 100],
  'user_22': [58522, 58522],
}
   */

function test(logs) {
    let result = {};

    logs.forEach((item) => {
        let [time, userId] = item;
        if (result[userId]) {
            result[userId] = [
                Math.min(time, result[userId][0]),
                Math.max(time, result[userId][1]),
            ];
        } else {
            result[userId] = [Number(time), Number(time)];
        }
    });

    console.log(result);
}
test(logs1);



//QUESTION 2: find max used log within interval of 5 minutes and return the {resourceName, count}

//resource _3 , 3
/*
    //sort  
    { resourced_1 : []}
    //
*/
function maxUsedResource(records) {
    if (!records || records.length === 0) {
        return [];
    }
    const times = new Map();
    for (const [timestamp, , resource] of records) {
        let time = parseInt(timestamp);
        if (times.has(resource)) {
            times.get(resource).push(time);
        } else {
            times.set(resource, [time]);
        }
    }
    let max = 0;
    let maxResource = '';
    for (const [resource, timestamps] of times) {
        timestamps.sort((a, b) => a - b);
        let start = 0;
        let end = 1;
        while (start < timestamps.length && end < timestamps.length) {
            if (timestamps[end] - timestamps[start] <= 300) {
                if (max < end + 1 - start) {
                    max = end + 1 - start;
                    maxResource = resource;
                }
                end++;
            } else {
                start++;
            }
        }
    }

    return { max, maxResource };
}