/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n= nums.length;
    const delta= new Array(n+1).fill(0);

    for (const [l, r] of queries){
        delta[l] += 1;
        if (r + 1<delta.length){
            delta[r + 1] -=1;
        }
    }
    const count= new Array(n).fill(0);
    count[0]= delta[0];
    for (let i=1; i< n; i++){
        count[i]= count[i -1] + delta[i];
    }
    for (let i=0; i < n; i++){
        if (nums[i] > count[i]) return false;
    }
    return true;
};