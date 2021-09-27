/* eslint-disable sort-keys */
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

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
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'forwardRef',
          'Fragment',
          'Children',
          'createElement',
          'useContext',
          'useEffect',
          'useLayoutEffect',
          'useMemo',
          'useReducer',
          'useRef',
          'useState',
        ],
        'node_modules/react-dom/index.js': ['unstable_batchedUpdates'],
        'node_modules/react-is/index.js': [
          'isContextConsumer',
          'isValidElementType',
        ],
      },
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
