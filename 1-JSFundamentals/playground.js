
const add =  (a, b, c) => {
    console.log("Add ran for", a,b,c);
    return a + b + c; // Very costly process
}

// add(1,2,3);
// add(2,3,4);
// add(1,2,3);

const cache = 123;

function memo(fn) {
    const cache = {};

    return function memoAddFn(p1,p2, p3) {
        const key = JSON.stringify([p1, p2, p3]);
        if (cache[key]) {
            return cache[key];
        }

        const result = fn(p1, p2, p3);
        cache[key] = result;
        return result;
    }
}

const memoAdd = memo(add);

console.log(memoAdd(1,2,3));
console.log(memoAdd(2,3,4));
console.log(memoAdd(1,2,3));