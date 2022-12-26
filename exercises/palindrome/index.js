// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;

// function palindrome(str) {
//     return (str === str.split('').reverse().join(''));
// }


// function palindrome(str) {
//     const str_len = str.length;
//     for (let i=0,j=str_len-1; i<str_len/2,j>str_len/2; i++,j--) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//     }
//     return true;
// }

// function palindrome(str) {
//     const str_len = str.length;
//     for (let i=0,j=str_len-1; i<j; i++,j--) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//     }
//     return true;
// }

// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }
