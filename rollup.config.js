// module.exports = require('autoroll')(require('./package.json'))
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

module.exports = [
  {
    input: './index.js',
    output: {// umd
      file: 'dist/umd/index.umd.js',
      name: 'BigNumber',
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs()
    ]
  },
  {
    input: './index.js',
    output: {// esm
      file: 'dist/esm/index.esm.js',
      format: 'esm'
    },
    // 指出应将哪些模块视为外部模块
    external: ['decimal.js-light']
  }
]
