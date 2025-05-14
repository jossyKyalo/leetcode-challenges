/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */

var lengthAfterTransformations = function(s, t) {
    const MOD= 1e9 + 7;
    let count= new Array(26).fill(0);
    for (const c of s){
        count[c.charCodeAt(0)- 'a'.charCodeAt(0)]++;
    }
    for (let i=0; i<t; i++){
        let newCount= new Array(26).fill(0);
        for (let j=0; j<26; j++){
            if (j !==25){
                newCount[j+1]=(newCount[j+1]+count[j])%MOD;
            }else{
                newCount[0]= (newCount[0] + count[j])%MOD;
                newCount[1]= (newCount[1]+ count[j])%MOD;
            }
        }
        count= newCount;
    }
    let total= 0;
    for (const num of count){
        total= (total + num)%MOD;
    }
    return total;
};