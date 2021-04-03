import calculate from '../src/index.js';


const testSuites = {
  "1 + 2": 3,
  "1 * 2": 2,
  "1 - 2": -1,
  "1 / 2": 0.5,
  "-5 + 0": -5,
  "-10000 + 10000": 0,
  "999999 + 1": 1000000,
}


describe('Simple testing calculator', () => {
  test.each(Object.entries(testSuites))("%s = %s", (expression, expected) => {
    const result = calculate(expression)
    expect(result).toBe(expected)
  })
});


describe("Complex testing calculator", () => {
  test("Chain of expression", () => {
    const result = calculate("7 + 200")
    const result2 = calculate(`${result} * 2`)
    const result3 = calculate(`${result2} - 15`)
    const result4 = calculate(`${result3} / 3`)
    const reslut5 = calculate(`${result4} * 2`)
    expect(reslut5).toBe(266)
  })
})


describe("Bad input testing calculator", () => {
  test("", () => {
    expect(calculate("")).toBeNaN()
    expect(calculate("1+")).toBeNaN()
    expect(calculate("hello")).toBeNaN()
    
    expect(calculate("00000 + 0000")).toBe(0)
    expect(calculate("00.1 + 1")).toBe(1.1)

  })
})