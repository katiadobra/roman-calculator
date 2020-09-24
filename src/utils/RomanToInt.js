// const conversion = {
//   "I": 1,
//   "V": 5,
//   "X": 10,
//   "L": 50,
//   "C": 100,
//   "D": 500,
//   "M": 1000
// }

const numeralsMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const isRoman = (value) =>{
  return !value ? false : new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/).test(value);
}

const romanToInt = (value) => {
  if (!isRoman(value)) {
    console.log('Invalid Roman numeral');
    return null;
  }

  

  const romanChars = value.split('');

  let total = 0;

  romanChars.forEach((char, index, chars) => {
    const currentValue = numeralsMap[char];
    const nextValue = numeralsMap[chars[index + 1]];

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  });

  return total;

  // const array = s.split('');

  // let total = 0,
  //     current,
  //     currentValue,
  //     next,
  //     nextValue;

  // for (let i = 0; i < array.length; i++) {
  //   current = array[i];
  //   currentValue = conversion[current];

  //   next = array[i + 1];
  //   nextValue = conversion[next];

  //   if(currentValue < nextValue) {
  //     total -= (currentValue);
  //   } else {
  //     total += (currentValue);
  //   }
  // }
  // return total;
}

export default romanToInt;
