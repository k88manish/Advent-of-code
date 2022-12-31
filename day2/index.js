const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n');

const hand1 = {
    A: 'ROCK',
    B: 'PAPER',
    C: 'SCISSORS'
}

const hand2 = {
    X: 'ROCK',
    Y: 'PAPER',
    Z: 'SCISSORS'
}

const points = {
    'ROCK': 1,
    'PAPER': 2,
    'SCISSORS': 3
}

// part 1 find winner for each round in rock paper scissors
const part1 = (input) => {
    let score = 0;
    input.forEach((round) => {
        const [hand1Move, hand2Move] = round.split(' ');
        if (hand1[hand1Move] === hand2[hand2Move]) {
            score += 3 + points[hand1[hand1Move]];
        } else if (hand2[hand2Move] === 'ROCK' && hand1[hand1Move] === 'SCISSORS') {
            score += 6 + points[hand2[hand2Move]];
        } else if (hand2[hand2Move] === 'PAPER' && hand1[hand1Move] === 'ROCK') {
            score += 6 + points[hand2[hand2Move]];
        } else if (hand2[hand2Move] === 'SCISSORS' && hand1[hand1Move] === 'PAPER') {
            score += 6 + points[hand2[hand2Move]];
        } else {
            score += 0 + points[hand2[hand2Move]];
        }
    })
    return score;
}

const winLoseMap = {
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win' 
}

function getWinningMove(move) {
    if (move === 'ROCK') {
        return 'PAPER';
    }
    if (move === 'PAPER') {
        return 'SCISSORS';
    }
    if (move === 'SCISSORS') {
        return 'ROCK';
    }
}

function getLoosingMove(move) {
    if (move === 'ROCK') {
        return 'SCISSORS';
    }
    if (move === 'PAPER') {
        return 'ROCK';
    }
    if (move === 'SCISSORS') {
        return 'PAPER';
    }
}

// part 2 find winning hand based on the rules
const part2 = (input) => {
    let score = 0;
    input.forEach((round) => {
        const [hand1Move, hand2Move] = round.split(' ');
        if (winLoseMap[hand2Move] === 'draw') {
            score += 3 + points[hand1[hand1Move]];
        }
        if (winLoseMap[hand2Move] === 'win') {
            score += 6 + points[getWinningMove(hand1[hand1Move])];
        }
        if(winLoseMap[hand2Move] === 'lose') {
            score += 0 + points[getLoosingMove(hand1[hand1Move])];
        }
    })
    return score;
}

console.log(part1(input));
console.log(part2(input));
