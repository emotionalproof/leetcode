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
 * @return {number[]}
 */

 var findMode = function(root) {
    let currentVal = null;
    let currentCount = 0;
    let maxCount = 0;
    let modes = []
    const inOrder = (node) => {
        if (!node) return
        inOrder(node.left)
        // Process current node
        if (node.val === currentVal) {
            currentCount++;
        } else {
            currentVal = node.val;
            currentCount = 1;
        }

        // Update mode(s)
        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes = [node.val]; // Reset mode list
        } else if (currentCount === maxCount) {
            modes.push(node.val);
        }
        inOrder(node.right)
    }
    inOrder(root);
    return modes
 }
