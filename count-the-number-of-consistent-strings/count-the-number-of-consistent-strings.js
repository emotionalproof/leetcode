/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let letters = new Set()
    let count = 0
    for (let i = 0; i < allowed.length; i++) {
        letters.add(allowed[i])
    }
    
    for (let i = 0; i < words.length; i++) {
        let j = 0
        let currentWord = words[i]
        while (j < currentWord.length) {
            if (!letters.has(currentWord[j])) break
            j++
        }
        if (j === currentWord.length) count++
    }
    return count
};