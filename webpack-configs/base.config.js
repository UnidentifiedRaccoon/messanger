const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Переменные

// Функции
const filename = (ext) => `[name].bundle.${ext}`;

// Конфиг
//
module.exports = {
  // The context is an absolute string to the directory that contains the entry files.
  entry: {
    entry: './src/app.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: filename('js'),
    assetModuleFilename: 'assets/[name].[ext]',
    chunkFilename: '[name].js',
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/cjs/handlebars.js',
    },
    extensions: ['.ts', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
        exclude: [/(node_modules)/],
      },

      { test: /\.inline\.svg$/, type: 'asset/source' },
      { test: /\.img\.svg$/, type: 'asset/inline' },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
