
export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !Number.isNaN(value);
}

export function isPositiveNumber(value: unknown): value is number {
	return isNumber(value) && value > 0;
}

export function isString(value: unknown): value is string {
	return typeof value === 'string';
}

export function isSymbol(value: unknown): value is symbol {
	return typeof value === 'symbol';
}