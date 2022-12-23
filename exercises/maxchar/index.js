// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let counts = {};
    for(char of str) {
        // console.log(char);
        counts[char] = (counts[char] ?? 0 ) + 1;
    }
    let maxChar = undefined;
    let maxCount = 0;
    for (key in counts) {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            maxChar = key;
        }
    }
    return key;
}

console.log(maxChar('aababbababbaaacccccccccddddddddddddd1'));

module.exports = maxChar;
