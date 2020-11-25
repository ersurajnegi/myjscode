/*
    Merge Two Sorted Lists
    Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4



Solution : 
    -> Maintain a head and a tail pointer on the merged linked list
    -> For all nodes in both lists, you choose the smaller current node and link it to the tail of the merged list, and moving    the current pointer of that list one step forward.
    -> You keep doing this while there are some remaining elements in both the lists. 
    -> If there are still some elements in only one of the lists, you link this remaining list to the tail of the merged list.

*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const mergedList = new ListNode();
    let l3 = mergedList;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }
    if (l1) l3.next = l1;
    if (l2) l3.next = l2;
    return mergedList.next;
};






