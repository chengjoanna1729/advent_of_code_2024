const fs = require('fs');

const grid = fs.readFileSync('./inputs/day_4.txt', 'utf-8').split('\r\n').map(line => line.split(''));

const check_mas = (pt1, pt2, pt3) => {
    let found = false;
    if (grid[pt1.y]?.[pt1.x] === 'M' && grid[pt2.y]?.[pt2.x] === 'A' && grid[pt3.y]?.[pt3.x] === 'S') {
        found = true;
    }
    return found;
}

let p1_total = 0;

for (let j=0;j<grid.length;j++) {
    for (let i=0;i<grid[0].length;i++) {
        if (grid[j][i] === 'X') {
            if (check_mas({y:j,x:i+1},{y:j,x:i+2},{y:j,x:i+3})) {
                p1_total += 1;
            }
            if (check_mas({y:j+1,x:i+1},{y:j+2,x:i+2},{y:j+3,x:i+3})) {
                p1_total += 1;
            }
            if (check_mas({y:j+1,x:i},{y:j+2,x:i},{y:j+3,x:i})) {
                p1_total += 1;
            }
            if (check_mas({y:j+1,x:i-1},{y:j+2,x:i-2},{y:j+3,x:i-3})) {
                p1_total += 1;
            }
            if (check_mas({y:j,x:i-1},{y:j,x:i-2},{y:j,x:i-3})) {
                p1_total += 1;
            }
            if (check_mas({y:j-1,x:i-1},{y:j-2,x:i-2},{y:j-3,x:i-3})) {
                p1_total += 1;
            }
            if (check_mas({y:j-1,x:i},{y:j-2,x:i},{y:j-3,x:i})) {
                p1_total += 1;
            }
            if (check_mas({y:j-1,x:i+1},{y:j-2,x:i+2},{y:j-3,x:i+3})) {
                p1_total += 1;
            }
        }
    }
}

console.log(p1_total)

const check_x_mas = (ne, se, sw, nw) => {
    let found = false;
    if (grid[ne.y]?.[ne.x] === 'S' && grid[se.y]?.[se.x] === 'S' && grid[sw.y]?.[sw.x] === 'M' && grid[nw.y]?.[nw.x] === 'M') {
        found = true;
    } else if (grid[ne.y]?.[ne.x] === 'M' && grid[se.y]?.[se.x] === 'M' && grid[sw.y]?.[sw.x] === 'S' && grid[nw.y]?.[nw.x] === 'S') {
        found = true;
    } else if (grid[ne.y]?.[ne.x] === 'M' && grid[se.y]?.[se.x] === 'S' && grid[sw.y]?.[sw.x] === 'S' && grid[nw.y]?.[nw.x] === 'M') {
        found = true;
    } else if (grid[ne.y]?.[ne.x] === 'S' && grid[se.y]?.[se.x] === 'M' && grid[sw.y]?.[sw.x] === 'M' && grid[nw.y]?.[nw.x] === 'S') {
        found = true;
    }
    return found;
}

let p2_total = 0;

for (let j=0;j<grid.length;j++) {
    for (let i=0;i<grid[0].length;i++) {
        if (grid[j][i] === 'A') {
            if (check_x_mas({y:j-1,x:i+1},{y:j+1,x:i+1},{y:j+1,x:i-1},{y:j-1,x:i-1})) {
                p2_total += 1;
            }
        }
    }
}

console.log(p2_total)
