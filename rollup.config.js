import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

const wheelName = 'simplePollingAction';

export default {
  input: `src/${wheelName}/index.js`,
  output: {
    file: `dist/${wheelName}.js`,
    format: 'umd',
    name: wheelName,
    sourceMap: true, // debug use
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
