require("dotenv").config();
const webpack = require("webpack");
const path = require("path");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",

        options: {
          plugins: ["syntax-dynamic-import"],

          presets: [
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ]
          ]
        },

        test: /\.js$/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.s(c|a)ss$/,

        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              fiber: require("fibers"),
              indentedSyntax: true
            }
          }
        ]
      }
    ]
  },

  output: {
    chunkFilename: "[name].[chunkhash].js",
    filename: "[name].[chunkhash].js"
  },

  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      PHOTO_API_HOST: JSON.stringify(process.env.PHOTO_API_HOST),
      PHOTO_API_FUNCTION_KEY: JSON.stringify(process.env.PHOTO_API_FUNCTION_KEY)
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map"
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      include: [/\.(html|js|css|png|woff(2)|ttf|eot|svg)$/],
      skipWaiting: true,
      clientsClaim: true,
      swDest: "./sw.js"
    }),
    new WebpackPwaManifest({
      name: "My PWA Demo App",
      short_name: "My PWA",
      description: "This is a sandbox.",
      display: "standalone",
      background_color: "#FFFFFF",
      theme_color: "#8FE3D9",
      start_url: "/?utm_source=web_app_manifest",
      ios: true,
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512]
        },
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons", "ios"),
          inject: true,
          ios: true
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: 1024,
          destination: path.join("icons", "ios"),
          ios: "startup"
        }
      ]
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve("./src"),
      vue$: "vue/dist/vue.esm.js"
    }
  },

  mode: "development",

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
};
