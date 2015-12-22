module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname + "/static",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: ["transform-runtime"]
        }
      }
    ]
  }
};
