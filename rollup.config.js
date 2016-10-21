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
    'd3-selection',
    'd3-selection-multi',
    'd3-transition',
    'moment',
    'moment-timezone'
  ],
  globals: {
    'd3-selection': 'd3',
    'd3-selection-multi': 'd3',
    'd3-transition': 'd3',
    'moment': 'moment',
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
