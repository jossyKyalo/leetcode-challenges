 /**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;
    const dp = new Array(n).fill(1);  
    const prevIndex = new Array(n).fill(-1);  

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (groups[i] !== groups[j] &&
                words[i].length === words[j].length &&
                hammingDistance(words[i], words[j]) === 1) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prevIndex[i] = j;
                }
            }
        }
    }

    let maxLength = 0;
    let endIndex = -1;
    for (let i = 0; i < n; i++) {
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            endIndex = i;
        }
    }

    const result = [];
    let curr = endIndex;
    while (curr !== -1) {
        result.unshift(words[curr]);  
        curr = prevIndex[curr];
    }

    return result;
};

function hammingDistance(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) count++;
    }
    return count;
}