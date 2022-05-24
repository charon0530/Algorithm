/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var zigzagLevelOrder = function (root) {
    let answer = [];
    if (root === null) return answer;
    answer.push([root.val]);
    let queue = [];
    queue.push(root);
    let count = 1;
    while (queue.length !== 0) {
        let len = queue.length;
        count++;
        let temp = [];
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            if (cur.left !== null) {
                queue.push(cur.left);
                temp.push(cur.left.val);
            }
            if (cur.right !== null) {
                queue.push(cur.right);
                temp.push(cur.right.val);
            }
        }
        if (temp.length !== 0 && count % 2 === 1) answer.push([...temp]);
        if (temp.length !== 0 && count % 2 === 0)
            answer.push([...temp].reverse());
    }
    return answer;
};
