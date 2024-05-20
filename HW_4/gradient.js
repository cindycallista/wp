const h = 0.01;

function f(x, y) {
    return x * x + y * y;
}

function dfdx(x, y) {
    return (f(x + h, y) - f(x, y)) / h;
}

function dfdy(x, y) {
    return (f(x, y + h) - f(x, y)) / h;
}

function grad(x, y) {
    return [dfdx(x, y), dfdy(x, y)];
}

var x = 1, y = 3;

console.log('x =', x, 'y =', y);
console.log('df(f(x, y), dx) =', dfdx(x, y));
console.log('df(f(x, y), dy) =', dfdy(x, y));
console.log('grad(f) =', grad(x, y));
