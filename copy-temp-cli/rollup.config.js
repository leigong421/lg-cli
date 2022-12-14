import { terser } from 'rollup-plugin-terser';
export default {
  input: './src/cli.js',
  output: {
    file: './lib/cli.js',
    format: 'cjs'
  },
  plugins: [terser()]
};
