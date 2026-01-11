// Array function (forEach)
const arr = [1,2,3,4,5,6];

// for(let i=0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

const loop = function (element, index, arr){
    console.log(element, index, arr);
} 

const square = function (element) {
    console.log(element*element);
}

const printOddNumbers = function(num) {
    if (num % 2 == 1) {
        console.log(num)
    }
}


arr.forEach(loop);
