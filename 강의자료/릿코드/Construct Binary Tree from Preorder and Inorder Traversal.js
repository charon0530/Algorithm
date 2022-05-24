/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
    function recur(cur_node, cur_pre_idx, in_ls, in_le, in_rs, in_re) {
        console.log(cur_node, cur_pre_idx, in_ls, in_le, in_rs, in_re);
        let left_count = 0;
        if (in_le - in_ls + 1 > 0) {
            left_count = in_le - in_ls + 1;
            let left_val = preorder[cur_pre_idx + 1];
            let left_idx = inorder.indexOf(left_val);
            let left_node = new TreeNode(left_val);
            cur_node.left = left_node;
            recur(
                left_node,
                cur_pre_idx + 1,
                in_ls,
                left_idx - 1,
                left_idx + 1,
                in_le
            );
        }
        if (in_re - in_rs + 1 > 0) {
            let right_val = preorder[cur_pre_idx + 1 + left_count];
            let right_idx = inorder.indexOf(right_val);
            let right_node = new TreeNode(right_val);
            cur_node.right = right_node;
            recur(
                right_node,
                cur_pre_idx + 1 + left_count,
                in_rs,
                right_idx - 1,
                right_idx + 1,
                in_re
            );
        }
    }
    const root = new TreeNode(preorder[0]);
    const root_idx = inorder.indexOf(root.val);
    recur(root, 0, 0, root_idx - 1, root_idx + 1, inorder.length - 1);
    return root;
};
