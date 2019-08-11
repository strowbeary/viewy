import scss from 'rollup-plugin-scss';
import globImport from 'rollup-plugin-glob-import';
import svg from 'rollup-plugin-svg';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    plugins: [
        scss(),
        globImport(),
        svg(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        })
    ],
    output: {
        format: 'cjs',
        file: 'lib/index.js'
    },
    external: ['lighterhtml']
};
