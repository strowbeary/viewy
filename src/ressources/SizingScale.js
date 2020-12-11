
const PHI = ((1+Math.sqrt(5)/2));

/**
 * Function to get standardized scale values
 * @param {number} scale an integer
 * @return {number} scale^PHI
 */

export function S(scale) {
    return Math.pow(scale, PHI);
}
