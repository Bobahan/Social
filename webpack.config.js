const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = !DEVELOPMENT;

console.log('Is development? ', DEVELOPMENT);

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    port: 4200,
  },

  optimization: {
    minimize: PRODUCTION,
    minimizer: [new TerserWebpackPlugin()],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: PRODUCTION,
      },
    }),
  ],

  module: {
    rules: [
      { test: /\.(png|jp(e*)g|svg|gif)$/, type: 'asset/resource' },
      {
        test: /\.(cjs|js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
