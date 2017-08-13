/**
 * Webpack config for production electron main process
 */

import path from "path";
import BabiliPlugin from "babili-webpack-plugin";
//import webpack from "webpack";

export default {
  entry: ["./app/main.dev.js"],
  output: {
    path: path.resolve(__dirname, "./app"),
    filename: "main.prod.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    /**
     * Babli is an ES6+ aware minifier based on the Babel toolchain (beta)
     */
    new BabiliPlugin()

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false
    //   }
    // })
  ],
  target: "electron-main",
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
};
