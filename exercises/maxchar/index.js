// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const { ObjectFlags } = require("typescript");


// 3. Optimization when there are more than one max chars (same number of count "aabbcc")
function maxChar(str) {
    let counts = {};
    let maxChar = undefined;
    let maxCount = 0;
    for(char of str) {
        // counts[char] = (counts[char] ?? 0 ) + 1;
        // OR
        counts[char] = (counts[char] + 1) || 1;  // || is a logical or and works with falsy values only
        if (counts[char] > maxCount) {
            maxCount = counts[char];
        }
    }
    return Object.keys(counts).filter(key => counts[key] === maxCount).join(',')
}

module.exports = maxChar;

// 1. Base Code

// function maxChar(str) {
//     let counts = {};
//     for(char of str) {
//         // counts[char] = (counts[char] ?? 0 ) + 1;
//         // OR
//         counts[char] = (counts[char] + 1) || 1;  // || is a logical or and works with falsy values only

//     }
//     let maxChar = undefined;
//     let maxCount = 0;
//     for (key in counts) {
//         if (counts[key] > maxCount) {
//             maxCount = counts[key];
//             maxChar = key;
//         }
//     }
//     return maxChar;
// }

// 2. Optimization during creating the map/dictionary. Can avoid additonal loop
// function maxChar(str) {
//     let counts = {};
//     let maxChar = undefined;
//     let maxCount = 0;
//     for(char of str) {
//         // counts[char] = (counts[char] ?? 0 ) + 1;
//         // OR
//         counts[char] = (counts[char] + 1) || 1;  // || is a logical or and works with falsy values only
//         if (counts[char] > maxCount) {
//             maxCount = counts[char];
//             maxChar = char
//         }
//     }
//     return maxChar;
// }