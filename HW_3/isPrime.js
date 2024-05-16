function isPrime(n) {
    if (n == 2) {
        console.log("isPrime");
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                console.log("notPrime");
                break;
            }
            else {
                console.log("isPrime");
            }
        }
    }
}
isPrime(2);
isPrime(5);
isPrime(10);