/*

    Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.



Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


*/
//Using Extra Space
var hasCycle = function(head) {
    if(!head) return false;
    var faster = head;
    var slower = head;
    while (faster && faster.next) {
        faster = faster.next.next;
        slower = slower.next;
        if (slower === faster) return true;
    }
    return false;
};


//without using any extra aspace
