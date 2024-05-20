function filter(a, b) {
    let c = []
    for (let i = 0; i < a.length; i++) {
        if (b(a[i])) {
            c.push(a[i]);
        }
    }
    return c;
}
console.log(filter([1, 2, 3, 4], function (x) { return x % 2 == 1; }));