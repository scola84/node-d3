import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  dest: './dist/d3.js',
  entry: 'index.js',
  format: 'umd',
  moduleName: 'd3',
  external: [
    '@scola/core',
    'd3-selection',
    'd3-transition',
    'moment-timezone'
  ],
  globals: {
    '@scola/core': 'core',
    'd3-selection': 'd3',
    'd3-transition': 'd3',
    'moment-timezone': 'moment'
  },
  plugins: [
    builtins(),
    resolve({
      jsnext: true
    }),
    commonjs({
      exclude: ['**/lodash-es/**']
    }),
    buble()
  ]
};
