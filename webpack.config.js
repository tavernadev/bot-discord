const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
  const webpackMode = env.NODE_ENV
  console.log('WEBPACK_NODE_ENV: ', webpackMode)

  return {
    entry: './src/index.js',
    target: 'node',
    mode: webpackMode !== 'production' ? 'development' : 'production',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    devtool: webpackMode !== 'production' ? 'inline-source-map' : 'none',
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: 'node_modules/**'
    },
    stats: {
      assets: true,
      colors: true,
      depth: true,
      entrypoints: true,
      env: true,
      logging: 'verbose'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin({
        activeModules: true,
        entries: true,
        modules: true,
        modulesCount: 100,
        profile: true
      })
    ]
  }
}
