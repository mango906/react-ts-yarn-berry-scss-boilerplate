const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3030,
    hot: true,
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          "css-loader",
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
  ],
};
