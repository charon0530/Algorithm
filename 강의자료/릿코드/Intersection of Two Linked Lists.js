/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let answer = null;
    let set = new Set();
    let curA = headA;
    let curB = headB;
    while (curA !== null) {
        set.add(curA);
        curA = curA.next;
    }
    while (curB !== null) {
        if (set.has(curB)) {
            answer = curB;
            break;
        }
        curB = curB.next;
    }
    return answer;
};
