const sqrt = require('math-sqrt');

for (let i=0; i< 100; i++) {
    console.log(sqrt(i));// Breaking
}

// Old Definition
// sqrt(number)

// // New Definition
// sqrt("Data Type", "Value")

console.log(process.env.NODE_ENV)