module.exports = function zeros(expression) {
  
  var newStr = '',
    i;
  for (i = expression.length - 1; i >= 0; i--) {
    newStr += expression.charAt(i);
  }
  let arr = newStr.split('*');
  let factorial = [];
  let even_double_factorial = [];
  let odd_double_factorial = [];

  //sort the factorials into single and double ones: even, odd.
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let small_arr = arr[j].split('');
    if (small_arr[0] == small_arr[1]) {
      if (arr[j].replace(/\!!/, '') % 2 == 0) {
        even_double_factorial.push(arr[j].replace(/\!!/, ''));
      } else {
        odd_double_factorial.push(arr[j].replace(/\!!/, ''));
      }

    } else {
      factorial.push(arr[j].replace(/\!/, ''))
    }
    j++
  }

  let pyaterki = 0;
  let dvoiki = 0;
  let zeros = 0;
  for (let p = 0; p <= factorial.length; p++) {
    let f = 0;
    
    for (let x = 1; x <= factorial[f]; x++) {
    if (x % 25 === 0) {
      pyaterki += 2
    } else if (x % 2 == 0) {
      dvoiki++
      } else if (x % 5 == 0) {
      pyaterki++}
    
    f++
    }    
    }
  let k = 0;
  for (let l = 0; l <= even_double_factorial.length; l++) {
    
    for (let y = 2; y <= even_double_factorial[k]; y=y+2) {
    if (y % 25 === 0) {
      pyaterki += 2
    }  else if (y % 2 == 0) {
      dvoiki++
      } else if (y % 5 == 0) {
      pyaterki++
    }     
    }k++    
    }
  

  let m = 0;
  for (let u = 0; u <= odd_double_factorial.length; u++) {
    
    for (let e = 1; e <= odd_double_factorial[m]; e=e+2) {
    if (e % 25 === 0) {
      pyaterki += 2
    } else if (e % 2 == 0) {
      dvoiki++
      
    } else if (e % 5 == 0) {
      pyaterki++}
    
    
    }  m++  
    }
if (dvoiki > pyaterki)  {
  zeros = pyaterki
  } else {
    zeros = dvoiki 
    }

  // //make a line turn with factorials for convenience of processing
  // // var newStr = '',
  // //   i;
  // // for (i = expression.length - 1; i >= 0; i--) {
  // //   newStr += expression.charAt(i);
  // // }
  // // let arr = newStr.split('*');
  // // let factorial = [];
  // // let even_double_factorial = [];
  // // let odd_double_factorial = [];

  // // //sort the factorials into single and double ones: even, odd.
  // // let j = 0;
  // // for (let i = 0; i < arr.length; i++) {
  // //   let small_arr = arr[j].split('');
  // //   if (small_arr[0] == small_arr[1]) {
  // //     if (arr[j].replace(/\!!/, '') % 2 == 0) {
  // //       even_double_factorial.push(arr[j].replace(/\!!/, ''));
  // //     } else {
  // //       odd_double_factorial.push(arr[j].replace(/\!!/, ''));
  // //     }

  // //   } else {
  // //     factorial.push(arr[j].replace(/\!/, ''))
  // //   }
  // //   j++
  // // }

  // // let zeros = 0;
  // // for (let i = 1; i <= factorial; i++) {
  // //   if (i % 25 === 0) {
  // //     zeros += 2
  // //   } else if (i % 5 == 0) {
  // //     zeros++
  // //   }
  // // }
  // // for (let i = 2; i <= even_double_factorial; i += i+2) {
  // //   if (i % 25 === 0) {
  // //     zeros += 2
  // //   } else if (i % 5 == 0) {
  // //     zeros++
  // //   }
  // // }
  // // for (let i = 1; i <= odd_double_factorial; i += i+2) {
  // //   if (i % 25 === 0) {
  // //     zeros += 2
  // //   } else if (i % 5 == 0) {
  // //     zeros++
  // //   }
  // // }


  // var newStr = '',
  //   i;
  // for (i = expression.length - 1; i >= 0; i--) {
  //   newStr += expression.charAt(i);
  // }
  // let arr = newStr.split('*');
  // let factorial = [];
  // let even_double_factorial = [];
  // let odd_double_factorial = [];

  // //sort the factorials into single and double ones: even, odd.
  // let j = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   let small_arr = arr[j].split('');
  //   if (small_arr[0] == small_arr[1]) {
  //     if (arr[j].replace(/\!!/, '') % 2 == 0) {
  //       even_double_factorial.push(arr[j].replace(/\!!/, ''));
  //     } else {
  //       odd_double_factorial.push(arr[j].replace(/\!!/, ''));
  //     }

  //   } else {
  //     factorial.push(arr[j].replace(/\!/, ''))
  //   }
  //   j++
  // }

  // let zeros = 0;

  // for (let p = 0; p <= factorial.length; p++) {
  //   let f = 0;

  //   for (let x = 1; x <= factorial[f]; x++) {
  //     if (x % 25 === 0) {
  //       zeros += 2
  //     } else if (x % 5 == 0) {
  //       zeros++
  //     }
  //     f++
  //   }
  // }
  // let k = 0;
  // for (let l = 0; l <= even_double_factorial.length; l++) {

  //   for (let y = 2; y <= even_double_factorial[k]; y = y + 2) {
  //     if (y % 25 === 0) {
  //       zeros += 2
  //     } else if (y % 5 == 0) {
  //       zeros++
  //     }

  //   }
  //   k++
  // }


  // let m = 0;
  // for (let u = 0; u <= odd_double_factorial.length; u++) {

  //   for (let e = 1; e <= odd_double_factorial[m]; e = e + 2) {
  //     if (e % 25 === 0) {
  //       zeros += 2
  //     } else if (e % 5 == 0) {
  //       zeros++
  //     }

  //   }
  //   m++
  // }



  return zeros;
  // your solution
}