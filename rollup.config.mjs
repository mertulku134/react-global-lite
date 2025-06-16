import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js', // Giriş noktası
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'named'
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named'
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        terser()
    ],
    external: ['react', 'react-dom']
};
