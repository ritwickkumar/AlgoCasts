// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 3. using slice
function chunk(array, size) {
    var chunked = [];
    for (var i=0; i < array.length; i+=size) {
        chunked.push(array.slice(i, i+size))
    }
    return chunked;
}


module.exports = chunk;

// 1.
// function chunk(array, size) {
//     var current_size = 0;
//     var chunk_array = [];
//     var ret_array = [];
//     const arr_len = array.length;
//     for (let elem of array) {
//         chunk_array.push(elem);
//         current_size++;
//         // Don't do size % current_size as it would create chunks of size 1 as 
//         // for current_size = 1, it would divide each number perfectly.
//         if ((current_size % size === 0) && chunk_array.length > 0) {
//             ret_array.push([...chunk_array]);
//             chunk_array = [];
//             current_size = 0;
//         }
//     }
//     // Caters to the scenario where array size is not a perfect multiple of size
//     // hence there will always be some element left in the chunk array whose 
//     // length is less than the expected size.
//     if (array.length % size != 0) {
//         ret_array.push([...chunk_array]);
//     }
//     return ret_array
// }


// 2.
// function chunk(array, size) {
//     var chunked = [];

//     for (let elem of array) {
//         last = chunked[chunked.length -1];
//         if (!last || last.length === size) {
//             chunked.push([elem]);
//         } else {
//             last.push(elem);
//         }
//     }
//     return chunked;
// }

// 4. Using splice..should be discouraged as it has performance implication due to 
// resizing of the original array.
// function chunk(array, size) {
//     var chunked = [];
//     while(array.length > 0) {
//         chunked.push(array.splice(0,size));
//     }
//     return chunked;
// }


// 4. Using recursion and slice
// function chunk(array, size) {

//     console.log(array, size)
//     if (array.length <= size) {
//         return [array];
//     }
//     // ... is the rest operator and allows each recursive call to 
//     // have its own separate return value(destructring). Without this
//     // the return value would have only two elements with second element 
//     // having nested arrays. And the clever move here is that with
//     // each recursive call only a slice of the array is passed. 
//     // As you see below with each recursive call array.slice(size) 
//     // {which is effective array.slice(size, array.length)} would
//     // pass the elements occuring after the chunk 0-size. 
//     return [array.slice(0, size), ...chunk(array.slice(size), size)];
// }