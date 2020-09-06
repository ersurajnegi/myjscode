/*
    Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?



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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null){
        head = null;
        return head;
    }
    let length = getLength(head);
    let dummy = head;
    length = length - n;
    
    if(length === 0){
        head = head.next;
        return head
    }
    
    while(length > 1){
        length--;
        head = head.next;
    }
    head.next = head.next && head.next.next;

    
    return dummy;
    
    function getLength(head){
        let ken = 0;
        while (head){
            ken += 1
            head = head.next
        }
        return ken
    }
};