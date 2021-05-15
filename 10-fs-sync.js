const { readFileSync, writeFileSync } = require('fs');

const test = readFileSync('./cont/fold/test.txt', 'utf8');

console.log(test);

writeFileSync('./cont/fold/test2.txt', `There fere node: ${test}`, { flag: 'a' });

const test2 = readFileSync('./cont/fold/test2.txt', 'utf8');