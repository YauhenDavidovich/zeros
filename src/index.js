module.exports = function zeros(expression) {
  var fact = eval(expression.replace(/\*/g, '*').replace(/!/g, ""));
  let n = 0;
  for (let i = 1; i <= fact ; i++) {
    if (i % 25 === 0) {
      n+= 2
    } else if (i % 5 == 0) {
        n++ 
        } 
    } 
  return n; 
  // your solution
}

let t = '1!!*4!*7!!*2!!';

var newStr = '', i;
    for (i = t.length - 1; i >= 0; i--) {
        newStr += t.charAt(i);
    }
let arr = newStr.split('*');
let double_factorial = []
let j=0;

for (let i =0; i < arr.length; i++) { 
  let small_arr = arr[j].split('');
  if (small_arr[0] == small_arr[1]) {
    double_factorial += arr[j].replace(/\!!/, '')    
  } 
  j++
    }  
  