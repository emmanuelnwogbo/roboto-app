const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(scss|css)$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    }]
  }
}

module.exports = config;