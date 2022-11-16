const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    sliderPage: path.resolve(__dirname, "./src/slider.js"),
    
    createArticle:  path.resolve(__dirname, "./src/createArticle.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    // clean: true,
  },

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./"),
    open: true,
    compress: true,
    port: 8080,
  },

  // devtool: "source-map",

  module: {
    rules: [
      {
        test: /.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.pug$/,
        loader: "@webdiscus/pug-loader",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }), //for unpack css styles in bundle

    new TerserPlugin(), //for minification js code

    // new OptimizeCssAssetsPlugin(), //for minification css

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",

      excludeChunks: [],
      // "mailer", "autoScroll", "burgerMenu"
      chunks: ["main", "sliderPage"],
    }),
    

    new HtmlWebpackPlugin({
      filename: "index_ENG.html",
      template: "./public/index_ENG.html",

      excludeChunks: [],
      // "mailer", "autoScroll", "burgerMenu"
      chunks: ["main", "sliderPage"],
    }),

    new HtmlWebpackPlugin({
      filename: "createArticle.html",
      template: "./public/blogStatic/createArticle.html",

      excludeChunks: [],
      // "mailer", "autoScroll", "burgerMenu"
      chunks: ["createArticle"],
    }),
  ],
};
