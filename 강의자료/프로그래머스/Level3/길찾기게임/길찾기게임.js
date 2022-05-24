function solution(nodeinfo) {
    let tree = new Array();
    for (let i = 0; i < nodeinfo.length; i++) {
        nodeinfo[i] = [...nodeinfo[i], i + 1];
    }

    function MakeTree(list, idx) {
        if (list.length === 0) return;
        list.sort((a, b) => {
            return a[1] - b[1];
        });
        let [x1, y1, node_num1] = list.pop();

        tree[idx] = node_num1;
        let left_list = list.filter((x) => x[0] < x1);
        let right_list = list.filter((x) => x[0] > x1);
        MakeTree(left_list, idx * 2);
        MakeTree(right_list, idx * 2 + 1);
    }
    MakeTree(nodeinfo, 1);
    for (let i = 0; i < tree.length; i++) {
        if (tree[i] === undefined) tree[i] = -1;
    }

    let pre_list = [];
    let post_list = [];
    function serch(idx) {
        if (idx >= tree.length) return;
        else {
            if (tree[idx] !== -1) pre_list.push(tree[idx]);
            serch(idx * 2);
            serch(idx * 2 + 1);
            if (tree[idx] !== -1) post_list.push(tree[idx]);
        }
    }
    serch(1);

    return [pre_list, post_list];
}

console.log(
    solution([
        [5, 3],
        [11, 5],
        [13, 3],
        [3, 5],
        [6, 1],
        [1, 3],
        [8, 6],
        [7, 2],
        [2, 2],
    ])
);
