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
    const dp = Array.from({ length: sales.length + 1 }, () =>
        new Array(2).fill(0)
    );

    function DFS(node) {
        if (node.child.length === 0) {
            dp[node.key][0] = 0;
            dp[node.key][1] = node.value;
        } else {
            let child_min_sum = 0;
            let isEmpty = true;
            for (let next of node.child) {
                DFS(next);
                if (dp[next.key][0] < dp[next.key][1]) {
                    child_min_sum += dp[next.key][0];
                } else {
                    child_min_sum += dp[next.key][1];
                    isEmpty = false;
                }
            }

            dp[node.key][1] = child_min_sum + node.value;
            if (isEmpty) {
                let min_gap = Number.MAX_SAFE_INTEGER;
                for (let next of node.child) {
                    min_gap = Math.min(
                        min_gap,
                        dp[next.key][1] - dp[next.key][0]
                    );
                }
                dp[node.key][0] = child_min_sum + min_gap;
            } else {
                dp[node.key][0] = child_min_sum;
            }
        }
    }
    DFS(nodes[1]);

    return Math.min(...dp[1]);
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
