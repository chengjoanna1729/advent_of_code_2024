const fs = require('fs');

const lines = fs.readFileSync('./inputs/day_1.txt', 'utf-8').split('\r\n');

let first_list = [];
let second_list = [];
lines.forEach((line) => {
    [a,b] = line.split('   ');
    first_list.push(Number(a));
    second_list.push(Number(b))
})

const sort_asc = (a,b) => a-b;

first_list.sort(sort_asc);
second_list.sort(sort_asc);

let p1_total = 0;
for (i=0;i<first_list.length;i++) {
    p1_total += Math.abs(first_list[i] - second_list[i]);
}
console.log(p1_total);

let list_obj = {}

second_list.forEach(no => {
    if (!list_obj[no]) {
        list_obj[no] = 1;
    } else {
        list_obj[no] +=  1;
    }
})

let p2_total = 0;

first_list.forEach(no => {
    let multiplier = list_obj[no] || 0;
    p2_total += no * multiplier;
})

console.log(p2_total);