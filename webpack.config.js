const path = require("path");

const CompressionPlugin = require("compression-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    mode: isProduction ? "production" : "development",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
      clean: true,
    },

    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "react/jsx-runtime": require.resolve("react/jsx-runtime"),
        "@contexts": path.resolve(__dirname, "src/contexts"),
        "@components": path.resolve(__dirname, "src/components"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      port: 8080,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new Dotenv(),
      ...(isProduction && process.env.ANALYZE === "true"
        ? [new BundleAnalyzerPlugin()]
        : []),
      new MiniCssExtractPlugin(),
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|css)$/,
      }),
    ],
  };
};
