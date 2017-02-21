import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const name = process.argv.indexOf('-w') === -1 ?
  'd3.js' :
  'd3.min.js';

export default {
  dest: './dist/' + name,
  entry: 'index.js',
  format: 'umd',
  moduleName: 'd3',
  external: [
    'd3',
    'd3-selection',
    'd3-transition',
    'moment-timezone'
  ],
  globals: {
    'd3': 'd3',
    'd3-selection': 'd3',
    'd3-transition': 'd3',
    'moment-timezone': 'moment'
  },
  plugins: [
    builtins(),
    postcss(),
    resolve({
      jsnext: true
    }),
    commonjs({
      exclude: ['**/lodash-es/**']
    }),
    buble()
  ]
};
