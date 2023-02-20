/**
 * @param {string} s
 * @return {number}
 */
 const ROM_VAL = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};
var f= romanToInt = function(s) {
    const reverseChars=s.split('').reverse();
    let prevChar=('I'); 
    
    return reverseChars.reduce((sum,val)=>{
        if(ROM_VAL[val] >= ROM_VAL[prevChar]){
            prevChar=val;
            return sum + ROM_VAL[val];
        }
         prevChar=val;
            return sum - ROM_VAL[val];
    },0);
};
console.log(f(''));