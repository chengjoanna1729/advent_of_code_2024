const fs = require('fs');

const lines = fs.readFileSync('./inputs/day_2.txt', 'utf-8').split('\r\n');

const check_ascending = (report) => {
    return report.every((no, index) => {
        if (index > 0) {
            const difference = report[index] - report[index-1];
            return difference > 0 && difference < 4;
        }
        return true;
    })
}

const check_descending = (report) => {
    return report.every((no, index) => {
        if (index > 0) {
            const difference = report[index] - report[index-1];
            return difference < 0 && difference > -4;
        }
        return true;
    })
}

const is_safe = (report) => {
    return (report[1] > report[0] && check_ascending(report)) || (report[1] < report[0] && check_descending(report));
}

const subset_is_safe = (report) => {
    return report.some((no, index) => {
        const new_array = report.toSpliced(index, 1);
        return is_safe(new_array);
    })
}

let p1_total = 0;
let p2_total = 0;

lines.forEach((line) => {
    let report = line.split(' ').map(Number);
    if (is_safe(report)) {
        p1_total += 1;
        p2_total += 1;
    } else {
        if (subset_is_safe(report)) {
            p2_total += 1;
        }
    }
})

console.log(p1_total, p2_total);