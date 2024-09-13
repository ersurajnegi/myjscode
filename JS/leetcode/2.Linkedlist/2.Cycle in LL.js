/*

    Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list
 where tail connects to. If pos is -1, then there is no cycle in the linked list.



Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


*/
//Using Extra Space
var hasCycle = function (head) {
    // The first round detect the circle
    if (!head) return null
    let fast = head
    let slow = head

    while (fast.next != null && fast.next.next != null) {

        fast = fast.next.next;
        slow = slow.next;
        if (slow == fast) {
            slow = head
            while (fast != slow) {
                fast = fast.next;
                slow = slow.next;

            }
            return slow;
        }
    }

    return null;


//without using any extra aspace
