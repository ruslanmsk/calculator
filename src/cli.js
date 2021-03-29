import readlineSync from 'readline-sync';
import calculate from './index.js';

const commands = {
  exit: () => {
    console.log('Bye!');
    return false;
  },
  clear: (run) => {
    console.log('> result: 0');
    return run();
  },
};

const isCommand = (cmd) => Object.keys(commands).includes(cmd);

const run = (acc = 0) => {
  const input = readlineSync.question('> ').trim();

  if (isCommand(input)) {
    const doCommand = commands[input];
    return doCommand(run);
  }

  const result = calculate(input, acc);

  console.log(`> result: ${result}`);

  return run(Number.isNaN(result) ? 0 : result);
};

export default () => {
  console.log('Calculator v1.0');
  run();
};
