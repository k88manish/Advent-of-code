const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');


const summedCalories = _.chain(input)
    .split('\n\n')
    .map(i => i.split('\n').map(Number))
    .map(_.sum).value();


const solution1 = _.chain(summedCalories)
    .max()
    .value();

console.log(solution1);

const solution2 = _.chain(summedCalories)
    .sort()
    .takeRight(3)
    .sum()
    .value();

console.log(solution2)