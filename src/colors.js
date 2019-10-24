export const colors = {
    grey: {
        100: '#f5f6f6',
        200: '#d9dcde',
        300: '#a0a7ac',
        400: '#5a666e',
        500: '#384650',
        600: '#334049',
        700: '#273037',
        800: '#181e23',
        900: '#0d1012',
    },
    red: {
        100: '#ff09391F',
        200: '#ff09393b',
        300: '#ff093957',
        400: '#ff093973',
        500: '#ff09398f',
        600: '#ff0939ab',
        700: '#ff0939c7',
        800: '#ff0939e3',
        900: '#ff0939ff',
    },
    orange: {
        100: '#fff9f3',
        200: '#fde8d3',
        300: '#f9c591',
        400: '#f59a3f',
        500: '#f28518',
        600: '#dd7a16',
        700: '#a65c11',
        800: '#68390b',
        900: '#361e06',
    },
    green: {
        100: '#f2fcf6',
        200: '#cff2de',
        300: '#85dfac',
        400: '#2bc76e',
        500: '#00bb50',
        600: '#00ab49',
        700: '#008137',
        800: '#005023',
        900: '#002a12',
    },
    teal: {
        100: '#f2fdfb',
        200: '#cff5f0',
        300: '#85e6d9',
        400: '#2bd3bd',
        500: '#00c9af',
        600: '#00b7a0',
        700: '#008a78',
        800: '#00564b',
        900: '#002d27',
    },
    blue: {
        100: '#eef4fa',
        200: '#cfe3fb',
        300: '#85b8f4',
        400: '#2b83ec',
        500: '#006ae8',
        600: '#0061d4',
        700: '#00499f',
        800: '#002e64',
        900: '#001834',
    },
    purple: {
        100: '#f9f7ff',
        200: '#e7e2ff',
        300: '#c3b6ff',
        400: '#9680ff',
        500: '#8066ff',
        600: '#755de9',
        700: '#5846af',
        800: '#372c6d',
        900: '#1d1739',
    },
};

export function colorToCssVariable (colorName, rename = false) {
    const result = {};
    const tints = Array.from(Object.keys(colors[colorName]));
    tints
        .map(tint => {
            return `--${rename ? colorName : "color"}-${tint}`;
        })
        .forEach((variableName, i) => {
            result[variableName] = colors[colorName][tints[i]]
        });
    return result;
}
