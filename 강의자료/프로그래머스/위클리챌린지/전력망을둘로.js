// DFS에서 return 은 위로 올려 보내는 값을 의미한다.
// 이 문제와 같이 방향이 주어지지 않은 트리는 임의로 chlist를 할당하여 되돌아오지 않도록 해야 한다!
// 트리구조에서는 어차피 해당 노드를 접근하는 방법이 하나뿐이므로 백트래킹을 통한 chlist를 안 풀어줘도 된다.
// DFS에서 if else => 뻗어 나갈 수 있는가 없는가.
// DFS에서 특별한 조건을 주지 않아도 빠져나올 수 있으면 뻗어나가기만 해도 됨! ex) 트리(더이상 뻗어나갈 수 없으면 멈추기 때문)

function solution(n, wires) {
    let result = [];
    var answer = n;
    let chlist = new Array(n + 1).fill(0);
    let tree_graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach((wire) => {
        let [s, e] = wire;
        tree_graph[s].push(e);
        tree_graph[e].push(s);
    });

    function DFS(node) {
        let child_count = 0;
        let total = 0;
        for (let next of tree_graph[node]) {
            if (chlist[next] === 1) continue;

            child_count++;
            chlist[next] = 1;
            let child_total = DFS(next);
            //chlist[next] = 0;
            total += child_total;
            if (Math.abs(n - 2 * child_total) < answer) {
                result.push([Math.abs(n - 2 * child_total), node, next]);
                answer = Math.abs(n - 2 * child_total);
            }
        }

        if (child_count === 0) return 1;
        else return total + 1;
    }

    DFS(1);
    console.log(result);
    console.table(chlist);
    return answer;
}

console.log(
    solution(7, [
        [1, 2],
        [2, 7],
        [3, 7],
        [3, 4],
        [4, 5],
        [6, 7],
    ])
);
