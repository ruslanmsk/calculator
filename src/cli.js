import readlineSync from 'readline-sync';
import calculate from './index.js';
import parse from './parser.js';

const commands = {
  'exit': () => {
    console.log('Bye!');
    return;
  },
  'clear': (run) => {
    console.log('> result: 0');
    return run(0);
  },
};

const isCommand = (cmd) => Object.keys(commands).includes(cmd);

const run = (acc = 0) => {
  const input = readlineSync.question('> ').trim();

  if (isCommand(input)) {
    const doCommand = commands[input];
    return doCommand(run);
  }

  const [left, right, operator] = parse(input);
  const result = calculate(isNaN(left) ? acc : left, right, operator);

  console.log(`> result: ${result}`);

  return run(isNaN(result) ? 0 : result);
};

export default () => {
  console.log(`Calculator v1.0`);
  run();
};
