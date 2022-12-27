// https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a

function sum(...numbers) {
    return numbers.reduce((accumulator, current) => {
        return accumulator+= current;
    });
};

console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5))