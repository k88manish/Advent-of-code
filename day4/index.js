const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const assignmentPair = input.split('\n').map(x => x.split(','));

let totalOverlap = 0
let partialOverlap = 0

assignmentPair.forEach(([r1, r2]) => {
    const [min1, max1] = r1.split('-').map(x => parseInt(x));
    const [min2, max2] = r2.split('-').map(x => parseInt(x));


    if((min1 <= min2 && max1 >= max2) || (min1 >= min2 && max1 <= max2)) {
        totalOverlap++;
    }

    if((min2 >= min1 && min2 <= max1) || (max2 >= min1 && max2 <= max1) || (min1 >= min2 && min1 <= max2) || (max1 >= min2 && max1 <= max2)) {
        console.log('partialOverlap', r1, r2);
        partialOverlap++;
    }
})

console.log(totalOverlap)
console.log('partialOverlap', partialOverlap)



