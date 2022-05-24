class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.child = [];
    }
}
function solution(sales, links) {
    var answer = 0;
    const nodes = new Array(sales.length + 1).fill(null);
    for (let i = 0; i < sales.length; i++) {
        nodes[i + 1] = new Node(i + 1, sales[i]);
    }
    for (let i = 0; i < links.length; i++) {
        let [s, e] = links[i];
        nodes[s].child.push(nodes[e]);
    }

    function DFS(node) {
        if (node.child.length === 0) return false;
        let child_values = [];
        for (let next of node.child) {
            let flag = false;

            flag = DFS(next);
            if (flag === true) {
                return false;
            }
            child_values.push(next.value);
        }
        let c_min_val = Math.min(...child_values);
        if (c_min_val >= node.value / 2) {
            answer += node.value;
            return true;
        } else {
            answer += c_min_val;
            return false;
        }
    }
    DFS(nodes[1]);
    return answer;
}
console.log(
    solution(
        [14, 17, 15, 18, 19, 14, 13, 16, 28, 17],
        [
            [10, 8],
            [1, 9],
            [9, 7],
            [5, 4],
            [1, 5],
            [5, 10],
            [10, 6],
            [1, 3],
            [10, 2],
        ]
    )
);
