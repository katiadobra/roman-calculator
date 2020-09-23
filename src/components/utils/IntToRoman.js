// Non recursive
// const toRoman = (args) => {
//   const number = {
//     'M': 1000, 'CM': 900,
//     'D': 500, 'CD': 400,
//     'C': 100, 'XC': 90,
//     'L': 50, 'XL': 40,
//     'X': 10, 'IX': 9,
//     'V': 5, 'IV': 4,
//     'I': 1
//   };

//   let result = '';

//   for (i in number) {
//     while (args >= number[i]) {
//       result += i;
//       args -= number[i];
//     }
//   }

//   return result;
// }

// Recursive way
const toRoman = (args) => {
  const number = {
    'M': 1000, 'CM': 900,
    'D': 500, 'CD': 400,
    'C': 100, 'XC': 90,
    'L': 50, 'XL': 40,
    'X': 10, 'IX': 9,
    'V': 5, 'IV': 4,
    'I': 1
  };

  let result = '';

  if (args === 0) {
    return result;
  } else {
    for (let i in number) {
      if (args >= number[i]) {
        result += i;
        return result + toRoman(args -= number[i]);
      }
    }
  }
}

export default toRoman;
