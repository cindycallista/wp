function sumPrime(n) {
    var sum = 0;

    for (let i = 2; i < n; i++) {
        var flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
            else {
                flag = true;
            }
        }
        if (flag) {
            sum += i;
        }
    }
    console.log(sum);
}
sumPrime(10);

