const path = require('path')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: 'node_modules/**'
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
  }
}
