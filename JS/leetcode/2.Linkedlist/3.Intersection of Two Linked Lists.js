/*

    Write a program to find the node at which the intersection of two singly linked lists begins.

    For example, the following two linked lists:
    a =[4,1,2,4,5]
    b = [5,6,1,3]
    ---> both intersect at 1.


    Approach: Take two pointers for the heads of both the linked lists. If one of them reaches the end earlier then use it by moving it to the beginning of the other list. Once both of them go through reassigning they will be equidistance from the collision point.
*/

var getIntersectionNode = function(headA, headB) {
    
    let curr1 = headA;
    let curr2 = headB;
   while (curr1 != curr2)  
    { 
  
        curr1 = curr1 == null ? headB : curr1.next;
        
        curr2 = curr2 == null ? headA : curr2.next;
        
    } 
  
    // Return the intersection node 
    return curr2; 
    
}