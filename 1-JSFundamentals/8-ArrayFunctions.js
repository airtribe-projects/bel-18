/* Map
    returns 1:1 mapping in the form of array
    Output would be of same lenght as input
*/
const arr = [1,2,3,4,5,6];

const square = function (element, index, arr) {
    console.log(element, index, arr);
    return element * element;
}

const accessOtherParams = function (e, i, a) {
    return e + i;
}

const squareArray = arr.map(square);

// const quadArray = arr.map(square).map(square);
// console.log(arr, squareArray, quadArray);

// console.log(arr.map(accessOtherParams));

/*
Filter
- Returns you an array
- gives you filtered results
- callback that we pass to filter should cater to the filter criteria

*/


const isEven = function (num) {
    return num % 2 == 0;    
}

const evenNumbers = arr.filter(isEven);

const evenNumbersArrowFn = arr.filter((num) => num%2);

const evenSquares = arr.map(square).filter(isEven);

console.log(arr, evenNumbers, evenSquares);

const largeNumber = function (num) {
    return num > 1000;
}

const largeSquares = arr.filter(largeNumber).map(square);
console.log(largeSquares);


/* Reduce
    - Given an array to reduce the value to a single data point, primitive, object;
*/

// const arr = [1,2,3,4,5,6];

const sum = function(accumulator, current) {
    console.log(accumulator, current);
    return accumulator + current;
}

const total = arr.reduce(sum, 0);

console.log(total);

const orders = [
    {
        id: 1,
        items: ["Coke", "mineral water"],
        total: 50
    }
]
