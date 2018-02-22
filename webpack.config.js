const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  entry: {
    index: "./src/index.jsx",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "www"),
    publicPath: "/www/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: [
            "react",
            "es2017",
          ],
          plugins: [
            "transform-object-rest-spread",
          ],
        }
      }]
    }]
  },
  devServer: {
    inline: true,
    watchContentBase: true,
  },
  resolve: {
    extensions: [ ".jsx", ".js" ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
};
