import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: "json" };

const banner = `/**
 * ${pkg.name}.js
 * v${pkg.version}
 */`;

export default {
  input: `src/${pkg.name}.js`,
  output: [
    {
      banner,
      file: `dist/${pkg.name}.es5.js`,
      format: 'umd',
      name: pkg.name
    },
    {
      banner,
      file: `dist/${pkg.name}.js`,
      format: 'esm'
    },
    {
      file: `dist/${pkg.name}.min.js`,
      format: 'esm',
      plugins: [terser()]
    },
    {
      file: `dist/${pkg.name}.es5.min.js`,
      format: 'umd',
      name: pkg.name,
      plugins: [terser()]
    }
  ]
};
