// import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

import typescript from 'rollup-plugin-typescript2';

// 组件
const POLLINGACTION = 'simplePollingAction';
const TREE = 'simpleTree';
const PAGINATION = 'simplePagination';
const ANIMATE = 'simpleAnimate';

const wheelName = TREE;

export default {
  input: process.env.BUILD === 'development' ? `src/${wheelName}/index.ts` : `src/index.ts`,
  output: {
    file: `dist/${wheelName}.js`,
    format: 'umd',
    name: process.env.BUILD === 'development' ? wheelName : 'simplewheels',
    sourcemap: process.env.BUILD === 'development' ? true : false
  },
  plugins: [
    postcss({
      extract: false,
      plugins: [
        require('autoprefixer')
      ]
    }),
    typescript(),
    // babel({
    //   exclude: 'node_modules/**'
    // }),
    !process.env.BUILD === 'development' && uglify()
  ]
};
