/*
    Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false

*/
var isPalindrome = function (l) {
    if (l === null) return true;
    let array = [];
    let current = l;
    while (current) {
        array.push(current.val);
        current = current.next
    }

    let reverseHead = reverseList(l);
    let count = 0;
    while (reverseHead) {
        if (reverseHead.val !== array[count]) {
            return false;
        }
        reverseHead = reverseHead.next;
        count = count + 1;
    }
    return true;
};

var reverseList = function (head) {
    if (!head) return null;
    var curr = head;
    var next = null;
    var prev = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head
};