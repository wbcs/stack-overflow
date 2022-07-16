// @ts-check
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('../src/fuck.js')({ namespace: '.fuck' })],
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
};
