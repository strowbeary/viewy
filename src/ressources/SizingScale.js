/**
 * Function to get standardized scale values
 * @param {number} scale an integer
 * @return {number} 2^(1+scale)
 */
export function S(scale) {
    return Math.pow(2, 1+scale);
}
