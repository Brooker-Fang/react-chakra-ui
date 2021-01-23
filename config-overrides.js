const { override } = require("customize-cra");

module.exports = override(config => {
  // 修改 publicPath 和输出路径
  config.output.publicPath = './'
  return config
});