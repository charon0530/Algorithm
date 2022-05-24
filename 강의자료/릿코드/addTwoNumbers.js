function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
    let real = null;
    let result = null;
    let plus_flag = false;
    while (l1 !== null && l2 !== null) {
        let sum;
        if (plus_flag) {
            sum = l1.val + l2.val + 1;
        } else {
            sum = l1.val + l2.val;
        }
        if (sum >= 10) {
            plus_flag = true;
            sum = sum % 10;
        } else {
            plus_flag = false;
        }
        if (result === null) {
            result = new ListNode(sum);
            real = result;
        } else {
            result.next = new ListNode(sum);
            result = result.next;
        }

        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1 !== null) {
        let sum = l1.val;
        if (plus_flag) {
            sum += 1;
        }
        if (sum >= 10) {
            plus_flag = true;
            sum = sum % 10;
        } else {
            plus_flag = false;
        }
        if (result === null) result = new ListNode(sum);
        else {
            result.next = new ListNode(sum);
            result = result.next;
        }
        l1 = l1.next;
    }
    if (plus_flag) {
        result.next = new ListNode(1);
    }

    while (l2 !== null) {
        let sum = l2.val;
        if (plus_flag) {
            sum += 1;
        }
        if (sum >= 10) {
            plus_flag = true;
            sum = sum % 10;
        } else {
            plus_flag = false;
        }
        if (result === null) result = new ListNode(sum);
        else {
            result.next = new ListNode(sum);
            result = result.next;
        }
        l2 = l2.next;
    }
    if (plus_flag) {
        result.next = new ListNode(1);
    }
    return real;
};
