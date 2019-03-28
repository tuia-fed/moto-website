const
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
  {VueLoaderPlugin} = require('vue-loader'),
  isProd = process.env.NODE_ENV === 'production'


const config = {
  entry: [
    'bootstrap/dist/css/bootstrap.min.css',
    './src/app.js'
  ],

  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },

  resolve: {
    alias: {
    }
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    contentBase: '.',
    stats: 'errors-only'
  },

  stats: 'errors-only',

  devtool: isProd ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.txt$/,
        use: ['raw-loader']
      },
      {
        test: /\.(jpg|png|ttf|woff2?)/,
        use: ['url-loader']
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
      Router: ['vue-router', 'default'],
      PIXI: 'pixi.js'
    }),
    new webpack.DefinePlugin({
      PREFIX: JSON.stringify('')
    })
  ],

  mode: isProd ? 'production' : 'development'
}

if (isProd) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      inlineSource: '.(js|css)$',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackInlineSourcePlugin()
  )
} else {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config