/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false
    //convert to string
    let str= x.toString();
    //comparison
    return str ===str.split('').reverse().join('');

};