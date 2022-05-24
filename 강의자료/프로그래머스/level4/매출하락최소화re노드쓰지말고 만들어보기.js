// 노드 쓰지말고 만들어보기 === class 안쓰고 만들어보기
// 인덱스로만 모든 정보를 접근할 수 있으면 굳이 노드를 안만들어도 된다.
function solution(sales = [], links = [[]]) {
    let dp = Array.from({ length: sales.length + 1 }, () => [-1, -1]);
    const tree = Array.from({ length: sales.length + 1 }, () => new Array());

    links.forEach((link) => {
        const [s, e] = link;
        tree[s].push(e);
    });

    sales.unshift(0);

    function DFS(node) {
        if (tree[node].length === 0) {
            dp[node][0] = 0;
            dp[node][1] = sales[node];
        } else {
            let child_min_sum = 0;
            let isEmpty = true;
            for (let next of tree[node]) {
                DFS(next);
                if (dp[next][0] < dp[next][1]) {
                    child_min_sum += dp[next][0];
                } else {
                    child_min_sum += dp[next][1];
                    isEmpty = false;
                }
            }
            dp[node][1] = child_min_sum + sales[node];

            if (isEmpty) {
                let min_gap = Number.MAX_SAFE_INTEGER;
                for (let next of tree[node]) {
                    min_gap = Math.min(min_gap, dp[next][1] - dp[next][0]);
                }
                dp[node][0] = child_min_sum + min_gap;
            } else {
                dp[node][0] = child_min_sum;
            }
        }
    }
    DFS(1);
    return Math.min(dp[1][0], dp[1][1]);
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
