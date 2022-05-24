class TreeNode {
    constructor(key, x, y, l_c = null, r_c = null) {
        this.key = key;
        this.x = x;
        this.y = y;
        this.l_c = l_c;
        this.r_c = r_c;
    }
}

function solution(nodeinfo) {
    nodeinfo.forEach((x, idx) => x.push(idx + 1));

    function MakeTree(root = new TreeNode(), node_info) {
        const p_x = root.x;

        const l_list = node_info.filter((x) => x[0] < p_x);
        const r_list = node_info.filter((x) => x[0] > p_x);
        let l_node_info = null;
        let r_node_info = null;
        if (l_list.length) {
            l_list.sort((a, b) => a[1] - b[1]);
            l_node_info = l_list.pop();
        }
        if (r_list.length) {
            r_list.sort((a, b) => a[1] - b[1]);
            r_node_info = r_list.pop();
        }
        if (l_node_info !== null) {
            root.l_c = new TreeNode(
                l_node_info[2],
                l_node_info[0],
                l_node_info[1]
            );
        }
        if (r_node_info !== null) {
            root.r_c = new TreeNode(
                r_node_info[2],
                r_node_info[0],
                r_node_info[1]
            );
        }
        if (root.l_c !== null) {
            MakeTree(root.l_c, l_list);
        }
        if (root.r_c !== null) {
            MakeTree(root.r_c, r_list);
        }
    }

    nodeinfo.sort((a, b) => a[1] - b[1]);
    const root_info = nodeinfo.pop();
    const root = new TreeNode(root_info[2], root_info[0], root_info[1]);
    MakeTree(root, nodeinfo);

    const pre = [];
    const post = [];
    function Search(root = new TreeNode()) {
        if (root === null) return;
        else {
            pre.push(root.key);
            Search(root.l_c);
            Search(root.r_c);
            post.push(root.key);
        }
    }
    Search(root);
    return [pre, post];
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
