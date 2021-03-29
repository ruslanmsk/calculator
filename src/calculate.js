const maths = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export const operators = Object.keys(maths);

const isNumber = (num) => typeof num === 'number';
const isNumbers = (nums = []) => nums.every(isNumber);
const isOperator = (operator) => operators.includes(operator);
const isValid = (left, right, operator) => isNumbers([left, right]) && isOperator(operator);
const isNotValid = (...args) => !isValid(...args);

export default (left, right, operator) => {
  if (isNotValid(left, right, operator)) {
    return NaN;
  }
  const math = maths[operator];
  return math(left, right);
};
