import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

export default {
  input: `src/index.js`,
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'simplewheels'
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
