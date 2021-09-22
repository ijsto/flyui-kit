/* eslint-disable sort-keys */
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

const svgr = require('@svgr/rollup').default;

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    svgr(),
    external(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
