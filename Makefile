install:
	npm ci
	chmod +x ./bin/*.js
	npm link

calc:
	node ./bin/calc.js

lint:
	npx eslint .