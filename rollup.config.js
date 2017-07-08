import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';

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
    'leaflet',
    'moment-timezone'
  ],
  globals: {
    'd3': 'd3',
    'd3-selection': 'd3',
    'd3-transition': 'd3',
    'leaflet': 'L',
    'moment-timezone': 'moment'
  },
  plugins: [
    builtins(),
    css(),
    resolve({
      jsnext: true
    }),
    commonjs({
      exclude: ['**/lodash-es/**']
    }),
    globals(),
    buble()
  ]
};
