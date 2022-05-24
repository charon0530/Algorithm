/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var oddEvenList = function (head) {
    let line1_dummy_head = new ListNode();
    let line2_dummy_head = new ListNode();
    let cur1 = line1_dummy_head;
    let cur2 = line2_dummy_head;
    let count = 1;
    while (head !== null) {
        if (count % 2 === 1) {
            cur1.next = head;
            cur1 = cur1.next;
            head = head.next;
        } else {
            cur2.next = head;
            cur2 = cur2.next;
            head = head.next;
        }
        count++;
    }
    cur2.next = null;
    cur1.next = line2_dummy_head.next;
    return line1_dummy_head.next;
};
