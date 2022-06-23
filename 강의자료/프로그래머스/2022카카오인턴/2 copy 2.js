class Node {
    constructor(val, pre, next) {
        this.val = val;
        this.next = next;
        this.pre = pre;
    }
}
class LinkedListQueue {
    constructor() {
        this.root = null;
        this.last = null;
        this.count = 0;
        this.sum = 0;
    }
    insert(node) {
        this.count++;
        this.sum += node.val;
        if (this.root === null) {
            node.pre = null;
            node.next = null;
            this.root = node;
            this.last = node;
        } else {
            node.pre = this.last;
            node.next = null;
            this.last.next = node;
            this.last = node;
        }
    }
    delete() {
        this.count--;
        let target = null;
        if (this.root === this.last) {
            target = this.root;
            this.root = null;
            this.last = null;
            this.sum -= target.val;
            return target;
        } else {
            target = this.root;
            this.root = target.next;
            this.root.pre = null;
            this.sum -= target.val;
            return target;
        }
    }
}
function solution(queue1 = [], queue2 = []) {
    var answer = 0;

    const linked_queue1 = new LinkedListQueue();
    const linked_queue2 = new LinkedListQueue();

    queue1.forEach((x) => linked_queue1.insert(new Node(x, null, null)));
    queue2.forEach((x) => linked_queue2.insert(new Node(x, null, null)));
    const first = linked_queue1.root;
    const last = linked_queue1.last;
    const size = linked_queue1.count;

    const half_sum = (linked_queue1.sum + linked_queue2.sum) / 2;
    if (half_sum !== parseInt(half_sum)) return -1;

    while (true) {
        // answer > 600000로바꾸면통과
        if (
            answer !== 0 &&
            size === linked_queue1.count &&
            linked_queue1.root === first &&
            linked_queue1.last === last
        ) {
            answer = -1;
            break;
        }
        if (linked_queue1.sum > linked_queue2.sum) {
            const poped = linked_queue1.delete();
            linked_queue2.insert(poped);
        } else if (linked_queue1.sum < linked_queue2.sum) {
            const poped = linked_queue2.delete();
            linked_queue1.insert(poped);
        } else {
            break;
        }
        answer++;
    }
    return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
