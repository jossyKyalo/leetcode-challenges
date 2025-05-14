/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
var lengthAfterTransformations = function(s, t, nums) {
    const MOD = 1e9 + 7;
    let count= new Array(26).fill(0);
    for (const ch of s){
        count[ch.charCodeAt(0)- 'a'.charCodeAt(0)]++;
    }
    for (let round=0; round< t; round++){
        const nextCount= new Array(26).fill(0);
        for (let i=0; i<26; i++){
            const freq= count[i];
            const jump= nums[i];

            for (let j=1; j<=jump; j++){
                let nextIndex= (i +j)%26;
                nextCount[nextIndex]= (nextCount[nextIndex]+freq)% MOD;
            }
        }
        count= nextCount;
    }
    return count.reduce((sum, val)=> (sum+val)%MOD, 0);
    
};