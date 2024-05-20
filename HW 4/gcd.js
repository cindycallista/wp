function gcd(a, b) {
    while (b != 0) {
        const res = b;
        b = a % b;
        a = res;
    }
    return a;
}
console.log(gcd(10, 18));