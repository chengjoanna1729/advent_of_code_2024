const fs = require('fs');

const rules = fs.readFileSync('./inputs/day_5_1.txt', 'utf-8').split('\r\n');
const pages_list = fs.readFileSync('./inputs/day_5_2.txt', 'utf-8').split('\r\n');

const rules_map = new Map()
rules.forEach((rule) => {
    [earlier_page, later_page] = rule.split('|').map(Number)
    if (!rules_map.get(earlier_page)) {
        rules_map.set(earlier_page, [later_page])
    } else {
        rules_map.set(earlier_page, [...rules_map.get(earlier_page), later_page])
    }
})

let p1_total = 0;
incorrect_pages_list = [];
pages_list.forEach(pages => {
    const pages_array = pages.split(',').map(Number);
    const page_map = new Map()
    for (let i=0;i<pages_array.length;i++) {
        page_map.set(pages_array[i], i)
    }
    let ordered = true;
    let found_exception = false;
    for (let [page, pindex] of page_map) {
        const later_pages = rules_map.get(page);
        if (!found_exception && later_pages) {
            for (let later_page of later_pages) {
                const later_pindex = page_map.get(later_page)
                if (!isNaN(later_pindex) && later_pindex < pindex) {
                    ordered = false
                    found_exception = true;
                }
            }
        }
    }
    if (ordered) {
        p1_total += pages_array[(pages_array.length-1) / 2]
    } else {
        incorrect_pages_list.push(pages_array)
    }
})
console.log(p1_total);

const sort_pages = (a,b) => {
    const a_later_pages = rules_map.get(a)
    const b_later_pages = rules_map.get(b)
    if (a_later_pages?.includes(b)) {
        return -1;
    } else if (b_later_pages?.includes(a)) {
        return 1;
    } else {
        return 0;
    }
}

let p2_total = 0;
incorrect_pages_list.forEach(pages => {
    const correct_order = pages.sort(sort_pages);
    p2_total += correct_order[(correct_order.length-1) / 2]

})
console.log(p2_total);