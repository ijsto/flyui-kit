/* eslint-disable sort-keys */
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

const svgr = require('@svgr/rollup').default;

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    replace({
      include: ['./src/kit/utils/icons.js'],
      preventAssignment: true,
      // Replace ReactComponent to allow resolution of SVG files under Rollup
      ReactComponent: 'default',
    }),
    svgr(),
    external(),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
