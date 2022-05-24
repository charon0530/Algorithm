"use strict";

class Node {
    constructor(x, y, node_num) {
        this.node_num = node_num;
        this.x = x;
        this.y = y;
        this.l_c = null;
        this.r_c = null;
    }
}

function solution(nodeinfos) {
    for (let i = 0; i < nodeinfos.length; i++) {
        nodeinfos[i] = [...nodeinfos[i], i + 1];
    }

    nodeinfos.sort((a, b) => {
        return a[1] - b[1];
    });

    function MakeTree(list, p_node) {
        let [x1, y1, node_num1] = [p_node.x, p_node.y, p_node.node_num];

        let left_list = list.filter((x) => x[0] < x1);
        let right_list = list.filter((x) => x[0] > x1);

        if (left_list.length) {
            let l_c_info = left_list.pop();
            p_node.l_c = new Node(l_c_info[0], l_c_info[1], l_c_info[2]);
            MakeTree(left_list, p_node.l_c);
        }

        if (right_list.length) {
            let r_c_info = right_list.pop();
            p_node.r_c = new Node(r_c_info[0], r_c_info[1], r_c_info[2]);
            MakeTree(right_list, p_node.r_c);
        }
    }
    let pre_list = [];
    let post_list = [];
    function Search(root_node) {
        pre_list.push(root_node.node_num);
        if (root_node.l_c) Search(root_node.l_c);
        if (root_node.r_c) Search(root_node.r_c);
        post_list.push(root_node.node_num);
    }

    let [root_x, root_y, root_node_num] = nodeinfos.pop();
    let root_node = new Node(root_x, root_y, root_node_num);
    MakeTree(nodeinfos, root_node);
    Search(root_node);
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
