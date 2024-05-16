function vectorAdd(a, b) {
    var add = [];
    for (let i = 0; i < a.length; i++) {
        add[i] = a[i] + b[i];
    }
    console.log(add);
}