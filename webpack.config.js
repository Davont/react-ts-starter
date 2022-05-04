const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // 入口文件配置
  entry: './src/index.js',
  // 出口文件配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // 模式选择（默认）
  mode: 'production',
  module: {
    plugins: [new MiniCssExtractPlugin()],
    rules: [
      {
        test: /\.less$/i, // 匹配 .less 文件
        // 注意之前说过的，loader是从下到上的一个执行顺序
        use: [
          // 还有官方的示例 这里是loader 咱们需要改成use
          'style-loader', // 创建style标签，并将js中的css代码添加到style标签中
          'css-loader', // 将css文件以common.js的方式整合到js文件中
          'less-loader', // 将less文件解析成css文件
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.png$/i,
        use: 'asset/resource',
      },
      {
        test: /\.ico$/i,
        use: 'asset/inline',
      },
      {
        test: /\.text$/i,
        use: 'asset/source',
      },
    ],
  },
};
