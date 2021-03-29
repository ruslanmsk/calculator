import parse from './parser.js';
import calculate from './calculate.js';

export default (expression, acc = 0) => {
  const [left, right, operator] = parse(expression);
  const leftOrAcc = isNaN(left) ? acc : left;
  return calculate(leftOrAcc, right, operator);
};
