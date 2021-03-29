import parse from './parser.js';
import calculate, { operators } from './calculate.js';

export { operators };

export default (expression, acc = 0) => {
  const [left, right, operator] = parse(expression);
  const leftOrAcc = Number.isNaN(left) ? acc : left;
  return calculate(leftOrAcc, right, operator);
};
