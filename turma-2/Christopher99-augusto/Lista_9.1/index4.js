const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    }

const obj2 = {
    d: 'd',
    e: 'e',
}

const total = {...obj, ...obj2}

console.log(total)

