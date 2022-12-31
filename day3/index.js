const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const rucksacks = input.split('\n');

let total = 0;

const itemsList = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

// part 1

rucksacks.forEach(rucksack => {
    const [compartment1, compartment2] = [rucksack.substring(0, (rucksack.length / 2)), rucksack.substring(rucksack.length / 2)];
    const items = compartment1.split('');

    let commonItem = ''
    let idx = 0;
    while (!commonItem && idx < items.length) {
        if (compartment2.includes(items[idx])) {
            commonItem = items[idx];
        }
        idx++;
    }

    if (commonItem) {
        total += itemsList.indexOf(commonItem) + 1;
    }
});

console.log(total);

// part 2
// split rucksacks in group of 3
const rucksacksGroups = _.chunk(rucksacks, 3);

let total2 = 0;
rucksacksGroups.forEach(rucksacks => {
    const commonItem = _.intersection(...(rucksacks.map(rucksack => rucksack.split(''))));
    if (commonItem.length) {
        total2 += itemsList.indexOf(commonItem[0]) + 1;
    }
});

console.log(total2);

