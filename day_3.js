const fs = require('fs');

const lines = fs.readFileSync('./inputs/day_3.txt', 'utf-8').split('\r\n');

let p1_total = 0;
lines.forEach((line) => {
    const results = line.matchAll(/(mul\([1-9]{1}[0-9]{0,2}\,[1-9]{1}[0-9]{0,2}\))/g)
    for (const match of results) {
        const [a,b] = match[0].slice(4).slice(0,-1).split(',').map(Number)
        p1_total += a*b
    }
})

console.log(p1_total)

let p2_total = 0;
let enabled = true;
lines.forEach((line) => {
    const results = line.matchAll(/(do\(\))|(don\'t\(\))|(mul\([1-9]{1}[0-9]{0,2}\,[1-9]{1}[0-9]{0,2}\))/g)
    for (const match of results) {
        if (match[0] === 'do()') {
            enabled = true;
        } else if (match[0] === "don't()") {
            enabled = false;
        } else {
            const [a,b] = match[0].slice(4).slice(0,-1).split(',').map(Number)
            if (enabled) {
                p2_total += a*b
            }
        }
    }
})

console.log(p2_total)