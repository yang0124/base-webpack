const DllPlugin = require('webpack').DllPlugin;

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  plugins: [
    new DllPlugin({
      path: 'manifest.json',
      context: __dirname,
      name: '[name]_[chunkhash]'
    })
  ]
}