function arrayMin(a) {
    var b = a[0];
    for (let i in a) {
        if (b > a[i]) {
            b = a[i];
        }
    }
    return b;
}
a = [12, 4, 5, 33, 3, 44];
console.log(arrayMin(a));