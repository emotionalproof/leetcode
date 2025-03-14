/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const _makeBst = (nums) => {
        if (nums.length === 1) new TreeNode(nums[0])
        if (nums.length === 0) return null;

        let middleIdx = Math.floor(nums.length/2);
        let currentNode = new TreeNode(nums[middleIdx]);

        currentNode.left = _makeBst(nums.slice(0, middleIdx))
        currentNode.right = _makeBst(nums.slice(middleIdx + 1))
        
        return currentNode;
    }
    
    return _makeBst(nums)
};