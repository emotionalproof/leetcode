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
    if (!root) return null;
    let stack = [root];
    let count = {}
    let modes = {}
    let mode = []
    let maxCount = 0
    while (stack.length) {
        let current = stack.pop();
         if (count[current.val]) {
            count[current.val]++
        } else {
            count[current.val] = 1;
        }
        
        let currentCount = count[current.val]
        if (currentCount > maxCount) {
            mode = [current.val]
            maxCount = currentCount;
        } else if (currentCount === maxCount) {
            mode.push(current.val)
        }
       
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return mode
 }
