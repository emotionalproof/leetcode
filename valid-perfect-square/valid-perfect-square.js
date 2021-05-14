/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true
    let i = 2
    let count = 0
    while (i * i <= num) {
        count++
        if (i * i === num) return true
        i++
        console.log(count)
    }
    return false
};