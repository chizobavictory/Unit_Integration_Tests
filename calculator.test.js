const mathOperation = require('./calculator')
describe("Calculator test", () => {
    it("Adding numbers together", () => {
        const result = mathOperation.sum(1, 2)
        expect(result).toBe(3)
    })
    test("Subtraticting two numbers", () => {
        const result = mathOperation.sub(2, 1)
        expect(result).toBe(1)
    })
    test("Multiplying two numbers", () => {
        const result = mathOperation.mul(2, 2)
        expect(result).not.toBe(22)
    })
    test("truthy operator", () => {
        const name = "john"
        const n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull()
        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
    })
    test("Number comparison", () => {
        const num = 10
        const num2 = -20
        const num3 = 0
        expect(num).toBeGreaterThan(5)
        expect(num2).toBeGreaterThanOrEqual(-40)
        // expect(num).toBeLessThan(11)
        expect(num3).toBeLessThanOrEqual(10)
    })
    it("string matchers", () => {
        const string = "Hello World"
        expect(string).toMatch(/World/)
    })
})