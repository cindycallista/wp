function daysInYear(n) {
    if (n % 4 != 0)
        console.log("365");
    else if (n % 100 != 0)
        console.log("366");
    else if (n % 400 != 0)
        console.log("365");
    else
        console.log("366");
}