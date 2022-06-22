var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

class Node {
    constructor(val) {
        this.val = val;
        this.lc = null;
        this.rc = null;
    }
}
class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(node) {
        if (this.root === null) {
            this.root = node;
        } else {
            let parent = null;
            let target = this.root;
            while (true) {
                if (target === null) break;

                if (target.val > node.val) {
                    parent = target;
                    target = target.lc;
                } else {
                    parent = target;
                    target = target.rc;
                }
            }
            if (node.val < parent.val) {
                parent.lc = node;
            } else {
                parent.rc = node;
            }
        }
    }
    postOrder() {
        let str = "";
        function DFS(curNode) {
            if (curNode === null) return;
            else {
                DFS(curNode.lc);
                DFS(curNode.rc);
                str += curNode.val + "\n";
            }
        }
        DFS(this.root);
        return str;
    }
}
function solution(input) {
    let lineIdx = 0;
    const bst = new binarySearchTree();
    while (input[lineIdx] !== undefined && input[lineIdx] !== "") {
        const num = Number(input[lineIdx++]);
        bst.insert(new Node(num));
    }
    console.log(bst.postOrder());
}

solution(param);
