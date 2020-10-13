// import babel from 'rollup-plugin-babel'
// import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import fs from 'fs';
import path from 'path';

const SRC = path.resolve(__dirname, './src');

const dirs = fs.readdirSync(SRC, {
  withFileTypes: true
});

const OUTPUTS = [];

dirs.forEach(function(dir) {
  const { name } = dir;
  if (name === 'utils' || dir.isFile()) {
    return;
  }

  OUTPUTS.push({
    input: process.env.BUILD === 'development' ? `src/${name}/index.ts` : `src/index.ts`,
    output: {
      file: `dist/simple${name}.js`,
      format: 'umd',
      name: process.env.BUILD === 'development' ? `simple${name}` : 'simplewheels',
      sourcemap: process.env.BUILD === 'development' ? true : false
    },
    plugins: [
      postcss({
        extract: false,
        plugins: [require('autoprefixer')]
      }),
      typescript()
    ]
  });
});

export default OUTPUTS;

// export default {
//   input: process.env.BUILD === 'development' ? `src/${wheelName}/index.ts` : `src/index.ts`,
//   output: {
//     file: `dist/${wheelName}.js`,
//     format: 'umd',
//     name: process.env.BUILD === 'development' ? wheelName : 'simplewheels',
//     sourcemap: process.env.BUILD === 'development' ? true : false
//   },
//   plugins: [
//     postcss({
//       extract: false,
//       plugins: [
//         require('autoprefixer')
//       ]
//     }),
//     typescript(),
//     // babel({
//     //   exclude: 'node_modules/**'
//     // }),
//     // !process.env.BUILD === 'development' && uglify()
//   ]
// };
