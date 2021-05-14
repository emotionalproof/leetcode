/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let min = 0
    let max = 2**16
    let mid = Math.floor((min + max)/2)

    while (min < max) {
        if (mid * mid === num) {
            break
        } else if (mid * mid > num) {
            max = mid - 1    
        } else if (mid * mid < num) {
            min = mid + 1
        }
        mid = Math.floor((min + max)/2)
    }

   return  mid * mid === num ? true : false
};