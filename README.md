# calculator
Simple calculator for browser and console

## Install
```bash
make install
```

## Usage console version
Run `calc` command in terminal

Available commands in program - "exit" and "clear"

Just type your expression and get the result

After that you can math result with new expression, just start your expression with an operator

Available math operators "+", "-", "*", "/"

## Usage web version
Just open `public/index.html` on your browser and enjoy

# Usage as npm pakage
```javascript
import calculate from 'calculator';

const result = calculate('2 + 2');
console.log(result); // return 4

const newResult = calculate('+ 30', result);
console.log(newResult); // return 34
```
