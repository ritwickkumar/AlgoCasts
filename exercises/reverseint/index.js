// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversedInt = 0;
    while (n !== 0) {
        reversedInt = (reversedInt * 10) + (n%10);
        // n = parseInt(n/10);
        n = Math.trunc(n/10);
     }
     return reversedInt;
}

module.exports = reverseInt;

// function reverseInt(n) {
//     const reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''));
//     return (n<0 ? -reversed: reversed);
// // const str = Math.abs(n).toString();
// // const reversed = Number(str.split('').reverse().join(''));
// }

// function reverseInt(n) {
//     return parseInt(Math.abs(n).toString().split('').reverse().join('')) * Math.sign(n);
// }

// function reverseInt(n) {
//     return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
//   }

// function reverseInt(n) {
//     abs_n = Math.abs(n);
//     if (abs_n < 10) {
//       return Math.sign(n) * abs_n;
//     } else {
//       // extracting one's place digit and multiplying it with a 
//       // 10's multiple to get to a number with same number of 
//       // digits such as for 165 => 5(one's place) * 10^2 
//       // (2 here indicates number of digits in quotient if 
//       // divided by 10) => 5 * 100 = 500. And then make a 
//       // recursive call with 16 (quotient in this case) as a 
//       // new number.
//       return (
//         Math.sign(n) *
//         ((abs_n % 10) * Math.pow(10, Math.floor(Math.log10(abs_n))) +
//           reverseInt(Math.trunc(abs_n / 10)))
//       );
//     }
//   }
