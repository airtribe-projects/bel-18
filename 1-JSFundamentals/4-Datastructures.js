// JS Datastructures

// Array: 

const arr = new Array(3);

arr[0] = "Jay";
arr[1] = 1;
arr[2] = false;

arr[400] = "Hello World";

// console.log(arr);

// Object
// It is similar to a Map data structure (Key --> value)

const obj = {
    key: 100,
    key2: 400,
    "key-2": 200,
    "Hello World": "JS 101" 
}

// console.log(obj, obj.key, obj["key2"])

// Not Supported
// console.log(obj, obj."Hello World");

// console.log(obj, obj["key-2"], obj["key2"], obj["Hello World"])


/* Memory Managment
Arrays, Objects, function are non primitive data types ()
- JS 
    - Call Stack: All the primitives memory is allocated from stack
    - Heap: Any non primitive construct, they would be allocated memory from the heap

*/

// Example 1: 
// const a = [1, 2]
// const clone = a;

// clone[1] = 10;

// console.log(a[1]);

// console.log(a, clone);


// Example 2: Primitive
// const a = 10
// let clone = a;

// clone = 15;

// console.log(a);

// console.log(a, clone);


// const objt = {
//     key: 100, 
//     key2: 200
// }

// cloneObj = objt;

// cloneObj.key = 2;
// console.log(objt);


/* How should we clone an array / object */
// Spread operator


const a = [1, 2]
const clone = [...a];

clone[1] = 10;

// console.log(a[1]);

// console.log(a, clone);


const objt = {
    key: 100, 
    key2: 200
}

cloneObj = {...objt};

cloneObj.key = 2;
console.log(objt, cloneObj);

