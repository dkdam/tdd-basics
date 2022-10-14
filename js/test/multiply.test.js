const multiply = require ('../multiply')

test('multiplies two numbers', () => {
    expect(multiply(2,5)).toBe(10)
})