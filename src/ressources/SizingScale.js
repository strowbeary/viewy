
const PHI = ((1+Math.sqrt(5)/2));

/**
 * Function to get responsive sizes
 * @param {number} pixel size as integer
 * @return {string} scale^PHI in rem
 */
export function sp(pixels) {
    return `${(pixels / 16) * 1}rem`
}

/**
 * Function to get standardized scale values
 * @param {number} scale an integer
 * @return {string} scale^PHI in rem
 */

export function S(scale) {
    return sp(Math.pow(scale, PHI));
}

