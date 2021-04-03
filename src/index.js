const maths = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const operators = Object.keys(maths);

export const isOperator = (operator) => operators.includes(operator);
export const getOperator = (expression) => [...expression].filter(isOperator).pop();
export const hasOperator = (expression) => Boolean(getOperator(expression));
export const isFullExpression = (expression) => {
  const currentOperator = getOperator(expression);
  return currentOperator && expression.split(currentOperator).length > 2;
};

const isNumber = (num) => !Number.isNaN(num);
const isNumbers = (nums = []) => nums.every(isNumber);
const isValid = (left, right, operator) => isNumbers([left, right]) && isOperator(operator);
const isNotValid = (...args) => !isValid(...args);

const calculate = (left, right, operator) => {
  if (isNotValid(left, right, operator)) {
    return NaN;
  }
  const math = maths[operator];
  return math(left, right);
};

const parse = (expression) => {
  const clearExpression = expression.replace(/\s/g, '');
  const currentOperator = getOperator(clearExpression);
  const operands = clearExpression.split(currentOperator);

  if (operands.length === 1) {
    const [right] = operands;
    return [NaN, parseFloat(right), currentOperator];
  }

  const [left, right] = operands;

  return [parseFloat(left), parseFloat(right), currentOperator];
};

export default (expression) => calculate(...parse(expression));