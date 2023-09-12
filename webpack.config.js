const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'eval',
    devServer: {
      server: 'spdy',
      client: {
        overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
        },
        reconnect: true
      },
      static: {
        directory: path.join(__dirname,'dist')
      },
      compress: true,
      port: 3000
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource'
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,

            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: ["@babel/plugin-transform-runtime"],
                cacheDirectory: true
              }
            },
          }
        ],
    },
    plugins: [
       new HtmlWebpackPlugin({
          title: "Easy Calculator",
          filename: "index.html",
          template: 'src/templates/calculator.html'
       }),
       new BundleAnalyzerPlugin()
    ]
};