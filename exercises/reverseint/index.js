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
        console.log(reversedInt,n);
     }
     return reversedInt;
}

reverseInt(165);

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
