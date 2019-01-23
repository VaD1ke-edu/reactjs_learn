function calculateRectangleSquare(a, b) {
    return a * b;
}

function calculateTriangleSquare(a, b, c) {
    let p = 0.5 * (a + b + c);
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function round(value) {
    return Math.round(value * 100) / 100;
}

function calculateArea(...sides) {
    for (let i in sides) {
        sides[i] = parseFloat(sides[i]);
    }

    const calculatorMap = {
        1: {
            getFigure: (sides) => 'square',
            getSquare: (sides) => calculateRectangleSquare(sides[0], sides[0])
        },
        2: {
            getFigure: (sides) => sides[0] === sides[1] ? 'square' : 'rectangle',
            getSquare: (sides) => calculateRectangleSquare(sides[0], sides[1])
        },
        3: {
            getFigure: (sides) => 'triangle',
            getSquare: (sides) => calculateTriangleSquare(sides[0], sides[1], sides[2])
        }
    };

    const calculator = calculatorMap[sides.length];
    return calculator ?
        {square: round(calculator.getSquare(sides)), figure: calculator.getFigure(sides), input: sides} :
        {square: undefined, figure: 'Undefined figure', input: sides};
}

console.log(calculateArea(2));    // {square: 4, figure: 'square'}
console.log(calculateArea(2, 2)); // {square: 4, figure: 'square'}
console.log(calculateArea(2, 3)); // {square: 6, figure: 'rectangle'}
console.log(calculateArea(2, 3, 4)); // {square: 2.9, figure: 'triangle'}
console.log(calculateArea(2, 3, 4, 5)); // {square: undefined, figure: 'Undefined figure'}
