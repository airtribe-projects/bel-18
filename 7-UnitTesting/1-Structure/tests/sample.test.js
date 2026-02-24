// Should be a number 
// Should have exactly 2 parameters

const {add} = require('../src/sample');

describe("Test addition of 2 numbers", () => {
    test("Should add two positive integer", () => {
        expect(add(1, 2)).toBe(3);
    })

    it("Should add 2 negative integers", () => {
        expect(add(-1, -2)).toBe(-3);
    })

    test("Should have exactly 2 parameters", () => {
        expect(add(1)).toBe(null);
    })

    test("Should accept numbers only", () => {
        expect(add(1, "Jay")).toBe(null);
    })
});


