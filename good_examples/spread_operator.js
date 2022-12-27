// https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a

const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

const bill = {
    ...adrian, // Would fetch properties from the adrian object
    fullName: 'Bill Gates', // overwrite an existing property (in this case pulled from adrian)
    website: 'https://microsoft.com'
};

console.log(adrian);
console.log(bill);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1, 1, 2, 6,7,8]; // this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]

console.log(numbers2)