// 第一题：类似meeting rooms，输入是一个int[][] meetings, int start, int end, 每个数都是时间，13：00 =》 1300， 9：30 =》 18930， 看新的meeting 能不能安排到meetings
// ex: {[1300, 1500], [930, 1200],[830, 845]}, 新的meeting[820, 830], return true; [1450, 1500] return false;

// 作者：关辰晓
// 链接：https://www.jianshu.com/p/fdbcba5fe5bc
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




// Question 1:
/**
 Similar to meeting rooms, the input is an int[][] meetings, int start, int end, each number is time, 
 13:00 = "1300, 9:30 =" 18930, see the new meeting function cannot be scheduled to meetings
ex: {[1300, 1500], [930, 1200],[830, 845]}, new meeting[820, 830], return true; [1450, 1500] return false;
 */
function canSchedule(meetings, start, end) {
    for (const meeting of meetings) {
        if (
            (start >= meeting[0] && start < meeting[1]) ||
            (end > meeting[0] && end <= meeting[1]) ||
            (start < meeting[0] && end > meeting[1])
        ) {
            return false;
        }
    }
    return true;
}



//QUESTION 2: Similar to merge interval, the only difference is output,
//output the idle time period, after the merge, just output the empty space between the two,
//pay attention to add 0 - the first start time


function spareTime(meetings) {
    if (!meetings || meetings.length === 0) {
        return [];
    }
    meetings = mergeMeetings(meetings);
    const result = [];
    let start = 0;
    for (let i = 0; i < meetings.length; i++) {
        result.push([start, meetings[i][0]]);
        start = meetings[i][1];
    }
    return result;
}

function mergeMeetings(meetings) {
    const result = [];
    meetings.sort((a, b) => a[0] - b[0]);
    let [start, end] = meetings[0];
    for (const meeting of meetings) {
        if (start < meeting[1]) {
            end = Math.max(end, meeting[1]);
        } else {
            result.push(start, end);
            start = meeting[0];
            end = meeting[0];
        }
    }
    return result;
}