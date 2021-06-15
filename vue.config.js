const {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  devPort,
} = require("./src/config");
module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
