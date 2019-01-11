//引入path模块
var path = require('path')
//引入webpack模块
var webpack = require('webpack')

module.exports = {
	//入口
  entry: './src/main.js',
  output: {
		//调用path方法进行路径拼接，真实路径
    path: path.resolve(__dirname, './dist'),
    //通过代码访问的路径，虚拟路径
		publicPath: '/dist/',
		//文件名字
    filename: 'build.js'
  },
	//加载的模块
  module: {
    rules: [
      {
				//匹配。vue文件打包处理
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
				//loader加载器 vue-loader转化。vue文件
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
				//将es6语法转换成es5做兼容处理
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
				//图片转化
        test: /\.(png|jpg|gif|svg)$/,
        //图片加载
				loader: 'file-loader',
        options: {
					//转化结果name+格式+hash值
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
		//编译方式：webpack独立构建详细见安装文档
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
	//启动服务注意事项
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
	//加载的功能
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
//生产环境要进行的处理，开发环境不用
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
