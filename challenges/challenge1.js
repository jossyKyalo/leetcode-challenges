 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    const sum1 = nums1.reduce((acc, val) => acc + val, 0);
    const sum2 = nums2.reduce((acc, val) => acc + val, 0);
    
    const zeros1 = nums1.filter(num => num === 0).length;
    const zeros2 = nums2.filter(num => num === 0).length;
    
    if (zeros1 === 0 && zeros2 === 0) {
        return sum1 === sum2 ? sum1 : -1;
    }
    
    if (zeros1 > 0 && zeros2 === 0) {
        if (sum2 > sum1) {
            return -1;
        }
        return Math.max(sum2, sum1 + zeros1);
    }
    
    if (zeros1 === 0 && zeros2 > 0) {
        if (sum1 > sum2) {
            return -1;
        }
        return Math.max(sum1, sum2 + zeros2);
    }
    
    
    return Math.max(sum1 + zeros1, sum2 + zeros2);
};

 