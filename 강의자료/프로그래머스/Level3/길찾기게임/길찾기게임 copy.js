class Node {
    constructor(x, y, node_num) {
        this.x = x;
        this.y = y;
        this.node_num = node_num;
        this.l_c = null;
        this.r_c = null;
    }
}
function solution(nodeinfo) {
    for (let i = 0; i < nodeinfo.length; i++) {
        nodeinfo[i] = [...nodeinfo[i], i + 1];
    }
    nodeinfo.sort((a, b) => a[1] - b[1]);
    //console.log(nodeinfo);

    function makeTree(node){
        
    }
    let [root_x, root_y, root_num] = nodeinfo.pop();
    let root_node = new Node(root_x, root_y, root_num);
    makeTree(root_node);
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
