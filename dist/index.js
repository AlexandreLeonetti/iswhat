export function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}
export function isPositiveNumber(value) {
    return isNumber(value) && value > 0;
}
export function isString(value) {
    return typeof value === 'string';
}
export function isSymbol(value) {
    return typeof value === 'symbol';
}
