const discount = 2;
const price = 5;
function sum(a) {
    return function(b) {
        return a + b;
    };
}

test('Check if sum is a function', () => {
    expect(typeof sum).toBe('function')
})

test('adds 2 + 5 to equal 7', () => {
    expect(sum(2)(5)).toBe(7);
});

