// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // debugger;
    return str
    .split("")
    .reduce((lastResult, currentChar) => currentChar + lastResult, "");
}


module.exports = reverse;

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse()
//     return arr.join('');
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let reversed = "";
//     for (char of str) {
//       reversed = char + reversed;
//     }
//     return reversed;
//   }

// function reverse(str) {
//     if (str === '') return '';
//     else {
//         for (let char of str) {
//             return reverse(str.substring(1,str.length)) + char;
//         }
//     }
// }
