import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

// 组件
const POLLINGACTION = 'simplePollingAction';
const TREE = 'simpleTree';
const PAGINATION = 'simplePagination';
const ANIMATE = 'simpleAnimate';

const wheelName = TREE;

export default {
  input: `src/${wheelName}/index.js`,
  output: {
    file: `dist/${wheelName}.js`,
    format: 'umd',
    name: wheelName
    // sourcemap: true
  },
  plugins: [
    postcss({
      extract: false,
      plugins: [
        require('autoprefixer')
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};
