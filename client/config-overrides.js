const { override, addWebpackPlugin } = require("customize-cra");
const webpack = require("webpack");

module.exports = override(
  addWebpackPlugin(
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          /segment-quad-factory\.js/,
          // other ignored imports or modules...
        ];
        return lazyImports.some((i) => i.test(resource));
      },
    })
  )
);
