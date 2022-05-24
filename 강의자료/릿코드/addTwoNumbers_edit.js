// TIP : 다른 한쪽이 NULL 일 때 대신 할 값 (ex 0)으로 대체한다.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    const dummyHead = new ListNode(0);
    let cur = dummyHead;
    let p = l1;
    let q = l2;
    let carry = 0;
    while (p !== null || q !== null) {
        let num1 = p !== null ? p.val : 0;
        let num2 = q !== null ? q.val : 0;

        let sum = num1 + num2 + carry;
        carry = parseInt(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;

        p = p !== null ? p.next : null;
        q = q !== null ? q.next : null;
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return dummyHead.next;
};
