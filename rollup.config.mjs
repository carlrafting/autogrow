import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: "json" };

const banner = `/**
 * ${pkg.name}.js
 * v${pkg.version}
 */`;

const esm = ({ minify = false } = {}) => ({
  banner,
  file: !minify ? `dist/${pkg.name}.js` : `dist/${pkg.name}.min.js`,
  format: 'esm',
  plugins: [minify && terser()]
});

const umd = ({ minify = false } = {}) => ({
  banner,
  file: !minify ? `dist/${pkg.name}.es5.js` : `dist/${pkg.name}.es5.min.js`,
  format: 'umd',
  exports: "named",
  name: pkg.name,
  plugins: [minify && terser()]
});

export default {
  input: `src/${pkg.name}.js`,
  output: [
    {
      ...esm()
    },
    {
      ...esm({ minify: true })
    },
    {
      ...umd()
    },
    {
      ...umd({ minify: true })
    }
  ]
};
