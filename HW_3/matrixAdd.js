function matrixAdd(a, b) {
    var add = [];
    for (let i = 0; i < a.length; i++) {
        add[i] = []
        for (let j = 0; j < a[i].length; j++) {
            add[i][j] = a[i][j] + b[i][j]
        }
    }
    console.log(add);
}