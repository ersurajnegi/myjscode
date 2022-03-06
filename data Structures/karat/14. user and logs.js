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



//QUESTION 2:
