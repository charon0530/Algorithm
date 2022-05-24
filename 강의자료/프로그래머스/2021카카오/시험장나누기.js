//콜스택 크기 커서 안됨
"use strict";
function canPack(people_num, k, num = [], links = [[]], root) {
    let pack_count = 1;
    function DFS(cur_node) {
        if (cur_node === -1) {
            return 0;
        } else {
            const left_node = links[cur_node][0];
            const right_node = links[cur_node][1];

            const l_c_sum = DFS(left_node);
            const r_c_sum = DFS(right_node);

            if (l_c_sum + r_c_sum + num[cur_node] <= people_num) {
                return l_c_sum + r_c_sum + num[cur_node];
            } else {
                if (
                    l_c_sum + num[cur_node] > people_num &&
                    r_c_sum + num[cur_node] > people_num
                ) {
                    pack_count += 2;
                    return num[cur_node];
                } else if (l_c_sum <= r_c_sum) {
                    pack_count += 1;
                    return l_c_sum + num[cur_node];
                } else if (l_c_sum > r_c_sum) {
                    pack_count += 1;
                    return r_c_sum + num[cur_node];
                }
            }
        }
    }
    DFS(root);
    return pack_count <= k;
}

function solution(k, num, links) {
    const parent = new Array(num.length).fill(-1);
    for (let i = 0; i < links.length; i++) {
        const lc = links[i][0];
        const rc = links[i][1];
        if (lc !== -1) parent[lc] = i;
        if (rc !== -1) parent[rc] = i;
    }

    let root = 0;
    while (parent[root] !== -1) {
        root = parent[root];
    }

    var answer = 0;
    let lt = Math.max(...num);
    let rt = Number.MAX_SAFE_INTEGER;

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);

        if (canPack(mid, k, num, links, root) === true) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

console.log(
    solution(
        3,
        [12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1],
        [
            [-1, -1],
            [-1, -1],
            [-1, -1],
            [-1, -1],
            [8, 5],
            [2, 10],
            [3, 0],
            [6, 1],
            [11, -1],
            [7, 4],
            [-1, -1],
            [-1, -1],
        ]
    )
);
