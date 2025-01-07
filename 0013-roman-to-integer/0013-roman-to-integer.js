/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0
    const convert = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let i = 0
    while (i < s.length){
        let currentNum = convert[s[i]]
        let nextNum = convert[s[i + 1]]
        if (currentNum < nextNum) {
            total += nextNum - currentNum
            i += 2
        } else {
            total += currentNum
            i ++
        }
    }
    return total
};