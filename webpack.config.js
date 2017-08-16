module.exports = {
  entry:  __dirname + "/src/js/root.js",//唯一入口文件
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      //使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: "/",//打包后文件位置
    filename: "./src/bundle.js"//打包后文件名
  }

}
