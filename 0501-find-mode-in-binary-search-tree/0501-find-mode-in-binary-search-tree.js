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
    let maxCount = 0
    while (stack.length) {
        let current = stack.pop();
         if (count[current.val]) {
            count[current.val]++
        } else {
            count[current.val] = 1;
        }
        
        let currentCount = count[current.val]
        if (modes[currentCount]) {
            modes[currentCount].push(current.val)
        } else {
            modes[currentCount] = [current.val]
        }
        maxCount = Math.max(maxCount, currentCount)
        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }
    return modes[maxCount]
 }
