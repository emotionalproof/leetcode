/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    if (strs.length === 1) return strs[0]
    let prefix = strs[0].split("")
    for (let j = 1; j < strs.length; j++) {
        if (prefix.length === 0) return ""
        if (strs[j].length === 0) return ""
        prefix = checkPrefix(prefix, strs[j])
    }
    return prefix.join("")
}

const checkPrefix = (prefix, word) => {
    let newPrefix = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === prefix[i]) {
            newPrefix.push(word[i])
        } else {
            break
        }
    }
    return newPrefix
}