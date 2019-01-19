function calculateArea(a, b, c) {
    let figure, square = 0;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (c) {
        figure = 'triangle';
        let p = 0.5 * (a + b + c);
        square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    } else {
        figure = a === b ? 'square' : 'rectangle';
        square = a * b;
    }
    square = Math.round(square * 100) / 100;
    return {square: square, figure: figure};
}

console.log(calculateArea(2, 2));    // {square: 4, figure: 'square'}
console.log(calculateArea(2, 3));    // {square: 6, figure: 'rectangle'}
console.log(calculateArea(2, 3, 4)); // {square: 2.9, figure: 'triangle'}
