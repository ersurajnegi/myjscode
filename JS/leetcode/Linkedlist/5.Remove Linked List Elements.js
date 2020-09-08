/*

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let curr = head;
    let prev = null;
    while (curr) {
        if (curr.val === val) {
            curr = curr.next;
            if (prev) {
                prev.next = curr;
            }
            else {
                head = head.next;
            }
        }
        else {
            //move ccurrent to the next val
            prev = curr;
            curr = curr.next;
        }
    }
    return head;

};