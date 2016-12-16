import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const name = process.argv.indexOf('-l') === -1 ?
  'd3.js' :
  'd3.min.js';

export default {
  dest: './dist/' + name,
  entry: 'index.js',
  format: 'umd',
  moduleName: 'd3',
  external: [
    '@scola/core',
    'd3-selection',
    'd3-transition'
  ],
  globals: {
    '@scola/core': 'core',
    'd3-selection': 'd3',
    'd3-transition': 'd3'
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
