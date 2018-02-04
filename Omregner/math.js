'use strict';
const transform = (memo, curr) => memo += curr;

export const MathOperations = new Map {
	['+', (val1, val2) => bigDecimal.add(val1, val2)],
	['-', (val1, val2) => bigDecimal.subtract(val1, val2)],
	['*', (val1, val2) => bigDecimal.multiply(val1, val2)],
	['/', (val1, val2) => bigDecimal.divide(val1, val2)],
	['^', (val1, val2) => Math.pow(val1, val2)],
	['sin', (val) => Math.sin(val)],
	['sinDeg', (val) => Math.sin(val * (Math.PI / 180))]
}
