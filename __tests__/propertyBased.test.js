/* eslint-disable jest/expect-expect */
import fc from 'fast-check';
import calculate from '../src/index.js';

describe('Property based', () => {
  test('bad input', () => {
    fc.assert(fc.property(fc.string(), (expression) => Number.isNaN(calculate(expression))));
  });

  test('plus', () => {
    fc.assert(fc.property(fc.float(0, 10000), fc.float(0, 10000), (op1, op2) => calculate(`${op1}+${op2}`) === op1 + op2));
  });

  test('minus', () => {
    fc.assert(fc.property(fc.integer({ min: 0 }), fc.integer(0, 10000), (op1, op2) => calculate(`${op1}-${op2}`) === op1 - op2));
  });

  test('mul', () => {
    fc.assert(fc.property(fc.integer(0, 10000), fc.integer(0, 10000), (op1, op2) => calculate(`${op1}*${op2}`) === op1 * op2));
  });

  test('div', () => {
    fc.assert(fc.property(fc.integer(0, 10000), fc.integer(0, 10000), (op1, op2) => calculate(`${op1}/${op2}`) === op1 / op2));
  });
});
