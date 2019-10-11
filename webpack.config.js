const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebPlugin } = require('web-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node.modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [

    //Vue插件
    new VueLoaderPlugin(),

    // 自动生成html
    new WebPlugin({
      filename: 'index.html',
      template: './public/index.html',
      requires: ['app']
    }),

    // 清空打包输出的dist目录
    new CleanWebpackPlugin()
  ]
}; 