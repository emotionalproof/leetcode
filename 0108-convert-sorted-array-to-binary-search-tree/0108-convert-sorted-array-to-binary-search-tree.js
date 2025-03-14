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
    const _makeBst = (left, right) => {
        if (left > right) return null;

        let middleIdx = Math.floor((left + right)/2);
        let middleNode = new TreeNode(nums[middleIdx]);

        middleNode.left = _makeBst(left, middleIdx - 1)
        middleNode.right = _makeBst(middleIdx + 1, right)

        return middleNode;
    }
    
    return _makeBst(0, nums.length - 1)
};