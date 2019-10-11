module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let factorial = [];
  let even_double_factorial = [];
  let odd_double_factorial = [];
  //sort the factorials into single and double ones: even, odd.
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let small_arr = arr[j].split('');
    if (small_arr[small_arr.length - 1] == small_arr[small_arr.length - 2]) { //identifying a double factorial
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

  let number_of_fives = 0;
  let number_of_twos = 0;
  let zeros = 0;

  //find the number of zeros in a single factorial
  let f = 0;
  for (let p = 0; p < factorial.length; p++) {
    for (let x = 1; x <= factorial[f]; x++) {
      if (x % 25 === 0) {
        number_of_fives += 2
      } else if (x % 5 == 0) {
        number_of_fives++
      } else if (x % 2 == 0) {
        number_of_twos++
      }
    }
    f++
  }

  //find the number of zeros in an even double factorial
  let k = 0;
  for (let l = 0; l <= even_double_factorial.length; l++) {
    for (let y = 2; y <= even_double_factorial[k]; y = y + 2) {
      if (y % 25 === 0) {
        number_of_fives += 2
      } else if (y % 5 == 0) {
        number_of_fives++
      } else if (y % 2 == 0) {
        number_of_twos++
      }
    }
    k++
  }

  //find the number of zeros in an odd double factorial
  let m = 0;
  for (let u = 0; u <= odd_double_factorial.length; u++) {
    for (let e = 1; e <= odd_double_factorial[m]; e = e + 2) {
      if (e % 25 === 0) {
        number_of_fives += 2
      } else if (e % 5 == 0) {
        number_of_fives++
      } else if (e % 2 == 0) {
        number_of_twos++
      }
    }
    m++
  }

  if (number_of_twos > number_of_fives) {
    zeros = number_of_fives
  } else {
    zeros = number_of_twos
  }

  return zeros;
}