const fs = require('fs');

const grid = fs.readFileSync('./inputs/day_6.txt', 'utf-8').split('\r\n').map(line => line.split(''));

const grid_map = new Map();

let position;
// directions = ['up','right','down','left']
let direction_index = 0;
for (let j=0;j<grid.length;j++) {
    for (let i=0;i<grid[0].length;i++) {
        const cell = grid[j][i];
        if (cell === '^') {
            position = [j,i]
            grid_map.set(`${j},${i}`, 'X')
        } else if (cell === '.') {
            grid_map.set(`${j},${i}`, '.')
        } else {
            grid_map.set(`${j},${i}`, '#')
        }
    }
}

let finished = false;
while (finished === false) {
    let moved = false;
    let next_position;
    let next_cell;
    while (!moved) {
        grid_map.set(`${position[0]},${position[1]}`, 'X')

        switch (direction_index) {
            case 0: 
                next_position = [position[0]-1, position[1]]
                next_cell = grid_map.get(`${next_position[0]},${next_position[1]}`);
                if (!next_cell) {
                    moved = true;
                    finished = true;
                } else if (next_cell === '.' || next_cell === 'X') {
                    position = next_position;
                    moved = true;
                } else if (next_cell === '#') {
                    direction_index = 1
                }
                break;
            case 1: 
                next_position = [position[0], position[1]+1]
                next_cell = grid_map.get(`${next_position[0]},${next_position[1]}`);
                if (!next_cell) {
                    moved = true;
                    finished = true;
                } else if (next_cell === '.' || next_cell === 'X') {
                    position = next_position;
                    moved = true;
                } else if (next_cell === '#') {
                    direction_index = 2
                }
                break;
            case 2: 
                next_position = [position[0]+1, position[1]]
                next_cell = grid_map.get(`${next_position[0]},${next_position[1]}`);
                if (!next_cell) {
                    moved = true;
                    finished = true;
                } else if (next_cell === '.' || next_cell === 'X') {
                    position = next_position;
                    moved = true;
                } else if (next_cell === '#') {
                    direction_index = 3
                }
                break;
            case 3:
                next_position = [position[0], position[1]-1]
                next_cell = grid_map.get(`${next_position[0]},${next_position[1]}`);
                if (!next_cell) {
                    moved = true;
                    finished = true;
                } else if (next_cell === '.' || next_cell === 'X') {
                    position = next_position;
                    moved = true;
                } else if (next_cell === '#') {
                    direction_index = 0
                }
                break;
        }

    }
}

let p1_total = 0;
grid_map.forEach((value) => {
    if (value === 'X') {
        p1_total += 1;
    }
})
console.log(p1_total);

let p2_total = 0;
console.log(p2_total);