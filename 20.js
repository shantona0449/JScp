
var f = romInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
};
let arr = s.split('');
let total = map[arr[0]];
for (let i = 0; i < arr.length; i++){
  let elem = arr[i];
  if (i > 0) {
    let prev = arr[i - 1];
    if (map[elem] > map[prev]) {
      let nval = map[elem] - map[prev];
      total += nval;
      total -= map[prev];
    } else {
      total += map[elem];
    }
  }
  return total;
};
console.log(f);