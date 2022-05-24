/**
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var inorderTraversal = function (root) {
    let answer = [];
    function DFS(node) {
        if (node === null) return;
        DFS(node.left);
        answer.push(node.val);
        DFS(node.right);
    }
    DFS(root);
    return answer;
};
