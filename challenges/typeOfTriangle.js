/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const [a, b, c]= nums.sort((x, y)=>x-y);
    if (a + b <= c){
        return "none";
    }
    if (a ===b && b===c){
        return "equilateral";
    }else if (a===b || a===c || b===c){
        return "isosceles";
    }else{
        return "scalene"
    };
    
};