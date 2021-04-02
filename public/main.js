/* eslint no-undef: "error" */
/* eslint-env browser */
import calculate, {
  isFullExpression,
  isOperator,
  hasOperator,
  getOperator,
} from '../src/index.js';

const state = { result: '0' };

const resultView = document.getElementById('result');
const controlListView = document.getElementById('controls');

const commands = {
  'C': () => '0',
  '=': () => calculate(state.result).toString(),
};

const isEmptyState = () => state.result === '0';
const isCommand = (token) => Object.keys(commands).includes(token);

const updateResult = (token) => {
  if (isEmptyState()) {
    return token;
  }
  if (isFullExpression(state.result)) {
    return state.result;
  }
  if (isCommand(token)) {
    const doCommand = commands[token];
    return doCommand();
  }
  if (isOperator(token) && hasOperator(state.result)) {
    const currentOperator = getOperator(state.result);
    return state.result.replace(currentOperator, token);
  }
  return `${state.result}${token}`;
};

const handleClick = (event) => {
  const token = event.target.textContent;
  state.result = updateResult(token);
  resultView.textContent = state.result;
};

controlListView.addEventListener('click', handleClick);
