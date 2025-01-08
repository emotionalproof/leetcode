/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    if (words.length === 1) return 0
    let total = 0
    for (let i = 1; i < words.length; i++) {
        total += isPrefixAndSuffix(words[0], words[i])
    }

    return total + countPrefixSuffixPairs(words.slice(1))
};

const isPrefixAndSuffix = (word1, word2) => {
    for (let i = 0; i < word1.length; i++) {
        let preLetter1 = word1[i]
        let sufLetter1 = word1[word1.length - 1 - i]
        let preLetter2 = word2[i]
        let sufLetter2 = word2[word2.length - 1 - i]
        if (preLetter1 !== preLetter2 || sufLetter1 !== sufLetter2) {
            return 0
        }
    }
    return 1
}