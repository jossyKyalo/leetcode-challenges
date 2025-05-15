/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const res= [];
    for (let i=0; i<words.length; i++){
        if(res.length===0){
            res.push(words[i]);
        }else{
            let lastWord= res[res.length-1];
            let lastGroup= groups[words.indexOf(lastWord)];
            if (groups[i]!==lastGroup){
                res.push(words[i]);
            }
        }
    }
    return res;
    
};