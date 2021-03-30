import readlineSync from 'readline-sync';
import calculate from './index.js';

const state = { result: 0 };

const commands = {
  _: (input) => {
    state.result = calculate(input, state.result);
    console.log(`= ${state.result}`);
  },
  clear: () => {
    state.result = 0;
  },
  result: () => console.log(`= ${state.result}`),
  exit: () => true,
};

export default () => {
  console.log('Welcome to Calculator!');
  readlineSync.promptCLLoop(commands);
  console.log('Bye!');
};
