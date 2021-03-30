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

const isOperator = (token) => operators.includes(token);
const getCurrentOperator = () => [...state.result].filter(isOperator).pop();
const isEmptyState = () => state.result === '0';
const isCommand = (token) => Object.keys(commands).includes(token);
const isFullExpression = () => {
  const currentOperator = getCurrentOperator();
  return currentOperator && state.result.split(currentOperator).length > 2;
};
const hasOperator = (token) => isOperator(token) && getCurrentOperator();

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
  if (hasOperator(token)) {
    return state.result.replace(getCurrentOperator(), token);
  }
  return `${state.result}${token}`;
};

const handleClick = (event) => {
  const token = event.target.textContent;
  state.result = updateResult(token);
  resultView.textContent = state.result;
};

controlListView.addEventListener('click', handleClick);
