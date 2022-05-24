// 트리구조의 경로는 1개뿐이다
// DFS를 스택구조로 만들면 후위순회랑 같다(post) => 즉, 그래프의 경로탐색은 불가능(트리는 가능)
//   1
// 2   3
// => 2 3 1
function solution(a, edges) {
    var answer = [];
    let node_num = a.length;
    let graph = Array.from({ length: node_num }, () => new Array());
    let ch = new Array(node_num).fill(0);
    if (a.reduce((a, b) => a + b) !== 0) return -1;
    edges.forEach((edge) => {
        let [s, e] = edge;
        graph[s].push(e);
        graph[e].push(s);
    });

    let total = 0n;
    let stack = [[0, -1]];

    while (stack.length !== 0) {
        let [node, parent] = stack.pop();

        //백트래킹을 위해 다시 입력된 노드인 경우. 즉, 백트래킹 된 경우
        if (ch[node] === 1) {
            a[parent] += a[node];
            total += BigInt(Math.abs(a[node]));
            continue;
        }

        stack.push([node, parent]); // stack을 이용한 DFS에서 백트래킹을 구현하는 방법!
        ch[node] = 1;

        for (let next of graph[node]) {
            if (ch[next] === 1) continue;
            stack.push([next, node]);
        }
    }
    console.log(Number.MAX_SAFE_INTEGER);
    return total;
}

console.log(
    solution(
        [-5, 0, 2, 1, 2],
        [
            [0, 1],
            [3, 4],
            [2, 3],
            [0, 3],
        ]
    )
);
