function matrixMul(a, b) {
    var res = []
    for (let i = 0; i < a.length; i++) {
        res[i] = [0, 0]
        for (let j = 0; j < a[0].length; j++) {
            for (let k = 0; k < a.length; k++) {
                res[i][j] += a[i][k] * b[k][j]
            }
        }
    }
    console.log(res);
}