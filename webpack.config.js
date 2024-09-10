const webpack = require("webpack");
const path = require("path");

const env = process.env.ELEVENTY_ENV || "production";

module.exports = {
  entry: './src/js/main.js', // Your main JS file that imports sal.js
  output: {
    path: path.resolve(__dirname, 'dist/js'), // Output directory for the bundle
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'App'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'], // This ensures node_modules is searched    extensions: ['.js', '.json'], // Automatically resolve these extensions
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(env),
      GOOGLE_ANALYTICS_ID: JSON.stringify(process.env.GOOGLE_ANALYTICS_ID),
      ANALYTICS_APP_NAME: JSON.stringify(process.env.ANALYTICS_APP_NAME)
    })
  ],
  mode: env,
  watch: env === 'development',
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
