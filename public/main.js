/* eslint no-undef: "error" */
/* eslint-env browser */
import calculate, { operators } from '../src/index.js';

const state = { result: '0' };

const resultView = document.getElementById('result');
const controlListView = document.getElementById('controls');

const commands = {
  'C': () => '0',
  '=': () => calculate(state.result).toString(),
};

const isEmptyState = () => state.result === '0';
const isFullExpression = () => state.result.split(' ').length > 3;
const isCommand = (token) => Object.keys(commands).includes(token);
const isOperator = (token) => operators.includes(token);
const hasOperator = (operator) => state.result.includes(operator);
const hasStateOperator = (token) => isOperator(token) && operators.some(hasOperator);

const updateResult = (token) => {
  if (isEmptyState()) {
    return token;
  }
  if (isFullExpression()) {
    return state.result;
  }
  if (isCommand(token)) {
    const doCommand = commands[token];
    return doCommand();
  }
  if (hasStateOperator(token)) {
    const [currentOperator] = [...state.result].filter(isOperator);
    return state.result.replace(currentOperator, token);
  }
  const space = isOperator(token) ? ' ' : '';
  return `${state.result}${space}${token}${space}`;
};

const handleClick = (event) => {
  const token = event.target.textContent;
  state.result = updateResult(token);
  resultView.textContent = state.result;
};

controlListView.addEventListener('click', handleClick);
