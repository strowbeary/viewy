import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    plugins: [
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
