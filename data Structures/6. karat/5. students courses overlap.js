/**
 You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. 
 The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.


作者：关辰晓
链接：https://www.jianshu.com/p/fdbcba5fe5bc

Sample Input:

student_course_pairs_1 = [
  ["58", "Software Design"],
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  [58, 17]: ["Software Design", "Linear Algebra"]
  [58, 94]: ["Economics"]
  [58, 25]: ["Economics"]
  [94, 25]: ["Economics"]
  [17, 94]: []
  [17, 25]: []
}

Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  [0, 42]: []
  [0, 9]: []
  [9, 42]: []
}
 */

//QUIESTION 1: 
//Write a function that takes in a list of (student ID number, course name) pairs and returns, 
// for every pair of students, a list of all courses they share.

//example 1
// function courseOverlaps(studentCoursePairs) {
//     if (!studentCoursePairs || studentCoursePairs.length === 0) {
//         return [];
//     }
//     const courses = new Map();
//     for (const [studentId, course] of studentCoursePairs) {
//         if (courses.has(studentId)) {
//             courses.get(studentId).push(course);
//         } else {
//             courses.set(studentId, [course]);
//         }
//     }
//     const studentIds = [...courses.keys()];
//     for (let i = 0; i < studentIds.length; i++) {
//         for (let j = i + 1; j < studentIds.length; j++) {
//             const overlaps = [];
//             for (const course1 of courses.get(studentIds[i])) {
//                 for (const course2 of courses.get(studentIds[j])) {
//                     if (course1 === course2) {
//                         overlaps.push(course1);
//                     }
//                 }
//             }
//             console.log(`[${studentIds[i]},${studentIds[j]}]: ${overlaps}`);
//         }
//     }
// }
//example 2
function courseOverlaps(student_course_pairs) {
    let studentMap = {};
    let res = {};

    for (let i = 0; i < student_course_pairs.length; i++) {
        let student = student_course_pairs[i][0];
        let course = student_course_pairs[i][1];
        if (studentMap[student] === undefined) {
            studentMap[student] = [course];
        } else {
            studentMap[student].push(course);
        }
    }

    // enumate through the result object and add the courses to the result object
    for (let studentA in studentMap) {
        for (let studentB in studentMap) {
            if (studentA !== studentB) {
                let courses = studentMap[studentA].filter((course) =>
                    studentMap[studentB].includes(course)
                );
                if (courses.length > 0) {
                    let key =
                        studentA > studentB
                            ? `${studentA},${studentB}`
                            : `${studentB},${studentA}`;
                    if (res[key] === undefined) {
                        res[key] = courses;
                    }
                }
            }
        }
    }
    console.log(res);
    return res;
}

student_course_pairs_1 = [
    ['58', 'Software Design'],
    ['58', 'Linear Algebra'],
    ['94', 'Art History'],
    ['94', 'Operating Systems'],
    ['17', 'Software Design'],
    ['58', 'Mechanics'],
    ['58', 'Economics'],
    ['17', 'Linear Algebra'],
    ['17', 'Political Science'],
    ['94', 'Economics'],
    ['25', 'Economics'],
];
courseOverlaps(courseOverlaps(student_course_pairs_1));
