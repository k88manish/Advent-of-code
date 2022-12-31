const fs = require('fs');
const _ = require('lodash');
const path = require('path');

const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n');

const stacks = lines[8].split('   ').map(() => []);

let rowIdx = 7
while (rowIdx >= 0) {
    const row = lines[rowIdx];

    let itemIdx = 0;
    while (itemIdx < row.length) {
        itemIdx = row.indexOf('[', itemIdx);
        if (itemIdx < 0) {
            break;
        }

        if (itemIdx >= 0) {
            stacks[itemIdx / 4].push(row[itemIdx + 1]);
        }

        itemIdx += 4;

    }
    rowIdx--;
}

// regex to extract from string move 1 from 8 to 4
const regex = /move (\d+) from (\d+) to (\d+)/;

// get number from string using regex
const getNumber = (str) => {

    const match = str.match(regex);

    return {
        count: match[1],
        from: match[2],
        to: match[3]
    }
}

const logStack = (stacks) => {
    stacks.forEach((stacks, i) => {
        console.log(`${i+1}: ${stacks.join('')}`);
    });
    console.log('\n\n')
}

logStack(stacks);

for (let i = 10; i < lines.length; i++) {
    const { count, from, to } = getNumber(lines[i]);
    console.log(count, from, to);
    const fromStack = stacks[from - 1];
    const toStack = stacks[to - 1];
    toStack.push(...(fromStack.splice(fromStack.length - count, count)));

    // logStack(stacks);
}

console.log(stacks.map(stack => _.last(stack)).join(''));

