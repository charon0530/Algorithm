//check Set은 미룬(Defer) 목록들
let graph, visit, check, key, lock;
function solution(n, path, order) {
    graph = new Array(n).fill(0).map(() => []);
    visit = new Array(n).fill(false);
    key = new Array(n).fill(-1);
    lock = new Array(n).fill(-1);
    check = new Set();

    path.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    order.forEach(([k, l]) => {
        key[k] = l;
        lock[l] = k;
    });

    circuitGraphFromBFS();
    //circuitGraph(0);

    for (let node of visit) if (!node) return false;
    return true;
}

// function circuitGraph(cur) {
//     //만약 현재 숫자가 이전 숫자가 필요하고, 그 숫자를 거쳐오지 않았다면 저장해 둔다.
//     if(preNode[cur] !== -1 && !visit[preNode[cur]]){
//         check[preNode[cur]] = cur;
//         return;
//     }
//     visit[cur] = true;

//     //만약 현재 숫자가 어떤 숫자의 이전 숫자라면 체크해 두었던 그 노드를 순회한다.
//     if(check[cur] !== -1) circuitGraph(check[cur]);

//     //갈 수 있는 곳 순회
//     graph[cur].forEach(next => {
//         if(visit[next]) return;
//         circuitGraph(next)
//     })
// }

function circuitGraphFromBFS() {
    const q = [];
    q.push(0);
    visit[0] = true;

    if (lock[0] !== -1) return;

    while (q.length !== 0) {
        const cur = q.shift();
        lock[key[cur]] = -1;

        if (check.has(key[cur])) {
            check.delete(key[cur]);
            visit[key[cur]] = true;
            q.push(key[cur]);
        }

        for (let next of graph[cur]) {
            if (visit[next]) continue;
            if (lock[next] !== -1) {
                check.add(next);
                continue;
            }
            visit[next] = true;
            q.push(next);
        }
    }
}
